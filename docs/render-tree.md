---
id: render-tree
title: PAG的渲染树
---

在3.0版本的PAG提供了渲染树的组装功能，让PAG素材可以成为一个大模板的一部分。整个渲染树由PAGComposition和PAGLayer组建而成，对于外部来说PAGComposition作为渲染树的分支节点，PAGLayer作为渲染树的叶子结点。一个PAG渲染树的样式大致如下：

![render-tree](https://pagio-1251316161.cos.ap-nanjing.myqcloud.com/img/docs/render-tree.png)

## PAGLayer

PAGLayer是渲染节点的基类，pag提供对PAGLayer的startTime进行控制。

```objectivec
//iOS
@interface PAGLayer : NSObject
……
- (void)setStartTime:(int64_t)time;
……
@end
```

```java
//Android
public class PAGLayer {
    public native void setStartTime(long time);
}
```

由于Layer可以进行组装，这导致了外部统一控制Layer替换内容的难度剧增。因此除了属性的控制外，根据Layer类型不同 ，对PAGTextLayer和PAGImageLayer也提供了直接替换显示内容的接口。

```objectivec
//iOS
@interface PAGTextLayer : PAGLayer
……
- (void)setFillColor:(UIColor*)color;

- (void)setFont:(PAGFont*)font;

- (void)setFontSize:(CGFloat)size;

- (void)setStrokeColor:(UIColor*)color;

- (void)setText:(NSString*)text;
……
@end

@interface PAGImageLayer : PAGLayer
……
- (void)replaceImage:(PAGImage*)image;
……
@end
```

```java
//Android
public class PAGTextLayer extends PAGLayer {
    public native void setFillColor(int color);
    public void setFont(PAGFont font);
    public native void setFontSize(float fontSize);
    public native void setStrokeColor(int color);
    public native void setText(String text);
}

public class PAGImageLayer extends PAGLayer {
    public void replaceImage(PAGImage image);
}
```



## PAGComposition

PAGComposition继承自PAGLayer，拥有Layer的所有对外接口。作为渲染树的容器，一个空的PAGComposition容器可以快速的通过Make函数构造。

```objectivec
//iOS
@interface PAGComposition : PAGLayer

+ (PAGComposition*)Make:(CGSize)size;
……
@end
```

```java
//Android
public class PAGComposition extends PAGLayer {
    public static native PAGComposition Make(int width, int height);
}
```

一个空的PAGComposition是不会也不必被渲染，因此libpag提供了接口对Composition的包含的内容进行修改。

```objectivec
//iOS
@interface PAGComposition : PAGLayer
……
- (void)setLayerIndex:(NSInteger)index layer:(PAGLayer*)child;

- (BOOL)addLayer:(PAGLayer*)pagLayer;

- (BOOL)addLayer:(PAGLayer*)pagLayer atIndex:(int)index;

- (BOOL)contains:(PAGLayer*)pagLayer;

- (PAGLayer*)removeLayer:(PAGLayer*)pagLayer;

- (PAGLayer*)removeLayerAt:(int)index;

- (void)removeAllLayers;

- (void)swapLayer:(PAGLayer*)pagLayer1 withLayer:(PAGLayer*)pagLayer2;

- (void)swapLayerAt:(int)index1 withIndex:(int)index2;
……
@end
```

```java
//Android
public class PAGComposition extends PAGLayer {
    public native void setLayerIndex(PAGLayer layer, int index);
    public native void addLayer(PAGLayer pagLayer);
    public native void addLayerAt(PAGLayer pagLayer, int index);
    public native boolean contains(PAGLayer pagLayer);
    public native PAGLayer removeLayer(PAGLayer pagLayer);
    public native PAGLayer removeLayerAt(int index);
    public native void removeAllLayers();
    public native void swapLayer(PAGLayer pagLayer1, PAGLayer pagLayer2);
    public native void swapLayerAt(int index1, int index2);
}
```



**addLayer时，PAGLayer会自动从其父节点中移除并添加进当前PAGComposition。**同时addLayer会有以下几种情况会添加失败：

> //PAGLayer为空
>
> 1）pagLayer == nullptr 
>
> //PAGComposition添加自己
>
> 2）pagLayer == this 
>
> //循环添加
>
> 3）pagLayer->layerType() == LayerType::PreCompose && pagLayer->Contains(this) == true 

**removeLayer和swapLayer都需要保证输入的layer都在composition之中，否则也会失败。**



PAGComposition无法被主动设置duration和frameRate。具体情况如下：

**当PAGComposition从PAGFile中获取，PAGComposition的duration和frameRate由设计师在AE中决定；**

**当PAGComposition是Make出来的，PAGComposition会根据添加的Layer变化自己的duration和frameRate。**

> 具体为：
>
> for layer in PAGComposition->layers
>
> PAGComposition->duration = MAX(layer->startTime + layer->duration, PAGComposition->duration)
>
> PAGComposition->frameRate = MAX(layer->frameRate, PAGComposition->frameRate)



## PAGFile

与此同时，PAGFile作为素材文件在内存中的实例，不再只存储文件数据，更是一个PAG中的渲染节点。3.0中PAGFile继承自PAGCompostion，可以直接被添加进其他的PAGComposition中。除了PAGComposition中的对应接口，PAGFile新增了copyOriginal方法。

```objectivec
//iOS
@interface PAGFile : PAGComposition
……
- (PAGFile*)copyOriginal;
……
@end
```

```java
//Android
public class PAGFile extends PAGComposition {
}
```



copyOriginal这个方法是用于直接基于原始素材再生成一份同样的渲染树。

这里有一点需要注意，**当前对于PAGFile所做的一切修改都不会被copy到返回值中，而后续对于PAGFile的修改也不会影响到copy出的数据。**



## 渲染树的范例工程：

渲染树的范例工程已经整合到我们的标准[<font color=blue>范例工程</font>](/docs/sdk.html)中。