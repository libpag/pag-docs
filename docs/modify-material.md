---
id: modify-material
title: 修改素材的时间属性和位置属性
---

## 修改素材的时间属性

PAG素材关于控制时间属性的API分布在PAGFile类中：

```objectivec
@interface PAGFile : PAGComposition
……
- (void)setDuration:(int64_t)duration;
……
@end
```

setDuration是PAGFile独有的方法，目的是配合设计师在AE中设置的TimeStretch属性。

在PAG中，为了保证设计师对素材的完整还原，虽然PAGFile内部存储了素材在修改duration后的对应的timeStretch形式，但是PAGFile是无法通过API对素材文件的timeStretch进行控制。



> 注：
>
> 默认素材的timestretch为none，在timestretch为none的情况下，当素材的duration比原始素材长时，素材会一直停留在最后一帧。



具体如何在文件中设置timeStretch属性，可以查看 [<font color=blue>如何使用时间伸缩(TimeStretch)插件</font>](/docs/time-stretch.html) 。



## 修改素材的位置属性

PAG主要通过matrix进行位置的控制，该接口位于PAGLayer中：

```objectivec
@interface PAGLayer : NSObject
……
- (CGAffineTransform)matrix;

- (void)setMatrix:(CGAffineTransform)matrix;

- (void)resetMatrix;

- (CGAffineTransform)getTotalMatrix;
……
@end
```

PAGLayer的matrix属性不受素材影响，默认值在iOS中为CGAffineTransformIdentity。resetMatrix将会把matrix重新设置成默认值。

虽然通过setMatrix可以影响图层在父节点中的位置，但是计算matrix通常需要用到原始PAGLayer的位置信息。



## 获取PAGLayer的原始位置信息

对于PAGLayer来说，本身是没有width和height属性的，但是PAGLayer可以获取到Layer的Bounds属性。

```objectivec
@interface PAGLayer : NSObject
……
- (CGRect)getBounds;
……
@end
```

对于非PAGComposition的PAGLayer来说，getBounds获取的值就代表了PAGLayer的宽和高，因此直接使用即可。

```objective-c
@interface PAGComposition : PAGLayer
……
- (NSInteger)width;

- (NSInteger)height;
……
@end
```

PAGComposition和PAGFile可以直接获取width和height，同时getBounds获取的rect代表的是其**内容**所占的位置和大小。

获取完宽高之后，需要再获取PAGLayer在素材中的原始matrix。这里可以通过在matrix为默认值时，使用`getTotalMatrix`获取。

获取后，通过应用matrix到rect上即可获取原始的位置信息。