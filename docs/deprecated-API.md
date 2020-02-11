---
id: deprecated-API
title: 已经废弃的API
---
## 3.0废弃的API

### PAGView

```objective-c
//iOS
@protocol PAGViewListener
- (void)onAnimationStart DEPRECATED_MSG_ATTRIBUTE("Please use onAnimationStart:pagView instead.");
- (void)onAnimationEnd DEPRECATED_MSG_ATTRIBUTE("Please use onAnimationEnd:pagView instead.");
- (void)onAnimationCancel DEPRECATED_MSG_ATTRIBUTE("Please use onAnimationCancel:pagView instead.");
- (void)onAnimationRepeat DEPRECATED_MSG_ATTRIBUTE("Please use onAnimationRepeat:pagView instead.");
@end
```

```java
//Android
public class PAGView extends TextureView {
	//Deprecated
    public void removeListener(Animator.AnimatorListener listener);
    //Deprecated
    public void addListener(Animator.AnimatorListener listener);
}

```



废弃原因：提供了新的更全面的API



```objective-c
//iOS
@interface PAGView : UIView
……
- (PAGFile*)getFile DEPRECATED_MSG_ATTRIBUTE("Please use getComposition instead.");
- (void)setFile:(PAGFile*)newFile DEPRECATED_MSG_ATTRIBUTE("Please use 'setPath' or 'setComposition' instead");
- (PAGComposition*)getRootComposition DEPRECATED_MSG_ATTRIBUTE("Please use [PAGFile replaceText] instead");
- (void)setTextData:(int)index data:(PAGText*)value DEPRECATED_MSG_ATTRIBUTE("Please use [PAGFile replaceImage] instead");
- (void)replaceImage:(int)index data:(PAGImage*)value;
……
@end
```

```java
//Android
public class PAGView extends TextureView {
    public PAGFile getFile();
    public PAGComposition getRootComposition();
    public void setTextData(int index, PAGText data);
    public void replaceImage(int index, PAGImage image);
}
```



原因：3.0中，PAGView中可以使用PAGComposition作为播放内容。在不使用PAGFile作为参数时，PAGFile相关的接口会出现错误的结果。

> 注：setFile会使用newFile的originalCopy，对newFile进行的replace操作不会应用上。



```objective-c
//iOS
@interface PAGView : UIView
……
- (BOOL)flush:(BOOL)force DEPRECATED_MSG_ATTRIBUTE("Please use 'flush' instead");
……
@end
```

```java
//Android
public class PAGView extends TextureView {
    public boolean flush(boolean force);
}
```



废弃原因：force在View的场景下基本无用，如果过多调用还会导致性能问题，因此删除。

------

### PAGRenderer

```objective-c
//iOS
@interface PAGRenderer : NSObject
……
@end
```

```java
//Android
public class PAGRenderer {
}
```



废弃原因：PAGRenderer只支持对于PAGFile的操作，无法支持更加细粒度的素材编辑。3.0使用PAGPlayer替代了PAGRenderer。

------

### PAGSurface

```objective-c
//iOS
@interface PAGSurface : NSObject
……
- (BOOL)present DEPRECATED_MSG_ATTRIBUTE("Please use 'flush' instead");
……
@end
```

```java
//Android
public class PAGSurface {
    public native boolean present();
}
```

废弃原因：present接口被统一成flush，防止使用者对接口产生歧义。

------

### PAGComposition

```objective-c
//iOS
@interface PAGComposition : PAGLayer
……
- (NSInteger)numLayers DEPRECATED_MSG_ATTRIBUTE("Please use 'numChildren' instead");
……
@end
```

```java
//Android
public class PAGComposition extends PAGLayer {
    public int numLayers();
}
```

废弃原因：numLayers接口被修改成numChildren。相对于numLayers，children更能表现节点的父子关系。

