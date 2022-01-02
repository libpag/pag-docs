---
id: SDK-migration
title: PAG SDK迁移指南
---



目前PAG更专注于编辑能力，因此Lottie与PAG大部分接口比较类似，但有些Lottie接口PAG并没有支持，目前我们基于iOS接口简单对常用接口迁移进行说明。



在iOS端，PAG目前只提供了OC对应接口，没有对swift进行进一步的支持。Lottie目前推荐使用swift，也同时提供了对应的OC接口。

下面我们将从Lottie的`Animation(swift) `/`CompatibleAnimation(OC)`和`AnimationView(swift)`/ `CompatibleAnimationView(OC)`来简述Lottie和PAG常用接口的迁移。

#### Animation(swift) /CompatibleAnimation(OC)

##### 动画加载

Animation/CompatibleAnimation在Lottie中提供动画的加载功能，在PAG中，我们使用PAGFile来加载动画。

Lottie:

```swift
//文件加载
let animation = Animation.named("LottieLogo1", subdirectory: "TestAnimations")

CompatibleAnimation* animation = [[CompatibleAnimation alloc] initWithName:@"LottieLogo1" bundle:[NSBundle mainBundle]];
```

PAG:

```objective-c
PAGFile* pagFile = [PAGFile Load:[[NSBundle mainBundle] pathForResource:@"LottieLogo1" ofType:@"pag"]];
```



> 高级加载功能：
>
> 1.PAG暂时不支持从URL加载文件，如果需要，需要自行完成下载环境。
>
> 2.Lottie提供协议AnimationCacheProvider，进行文件高级加载控制。由于相对于LottieAnimation加载来说，PAGFile的加载十分迅速，因此PAG并没有提供对应协议。



##### 动画基本信息

其中Lottie可以获取动画的基本信息，包括`version、type、startFrame、endFrame、frameRate、duration、width、height`。

在PAG中，PAGFile也可以获取相关信息。

其中，`tagLevel`对应`version`，用于标记文件版本。在PAG中，高版本导出的PAG素材可以被低版本兼容，但是会丢失不支持的效果。

PAG只支持`type2d`，因此没有记录`type`属性。

PAG文件默认从0帧开始，因此`startFrame`、`endFrame`、`duration`对应于PAG中的`duration`。

（注*：`duration`属性基于microseconds进行计算，并不和Lottie一致）。

`frameRate`对应PAGFile中的`frameRate`，二者均表示文件帧率。

Lottie中`width\height`对应PAGFile中的`width\height`，单位和意义一致。



> 基于Marker的功能：
>
> 1.PAG支持在Layer中标记Marker，但目前无法直接根据Marker获取帧号或者时长，因此如果有需要，可以通过获取Layer再判断Layer中的Marker信息进行计算。



#### AnimationView(swift)/CompatibleAnimationView(OC)

AnimationView/CompatibleAniamtionView提供动画的播放功能，在PAG中，我们使用PAGView来进行基础动画的播放。

Lottie:

```swift
//View创建
let animationView = AnimationView(animation: animation)

CompatibleAnimationView* lottieView = [[CompatibleAnimationView alloc] initWithFrame:frame];
```

PAG:

```objective-c
 PAGView* pagView = [[PAGView alloc] initWithFrame:frame];
```



> PAGView无法根据动画自动适应View的大小，需要通过代码根据PAGFile的信息控制View的Frame。



##### contentMode

Lottie直接支持`UIView`的`contentMode`，在PAG中，对应属性为`scaleMode`。具体对应关系如下：

```
PAGScaleModeLetterBox -- UIViewContentModeScaleAspectFit (默认属性)
PAGScaleModeStretch -- UIViewContentModeScaleToFill*
PAGScaleModeZoom -- UIViewContentModeScaleAspectFill
```

对于其他属性，PAG目前并没有支持，可以根据需要直接设置`matrix`。（注*：`matrix`与`scaleMode`为互斥属性）。



##### 图片替换

Lottie通过接口`setImageProvider`进行图片替换，在PAG中，`PAGView`有`- (void)replaceImage:(int)index data:(PAGImage*)value;`这一接口。

其中`index`为对应Layer的`editableIndex`，图片与文字各自维护一套。`PAGImage`可以根据`name`\\`path`等各种方法创建，具体可以看PAGImage的对应接口。



##### 文字替换

Lottie通过接口`setTextProvider`进行文字替换，在PAG中，`PAGView`有`- (void)setTextData:(int)index data:(PAGText*)value;`这一接口

其中`index`为对应Layer的`editableIndex`，图片与文字各自维护一套。`PAGText`包含文字各种属性，具体可以看`PAGText`对应的定义，推荐先获取Layer的PAGText，再将修改后的PAGText设置给对应的Layer。



##### 播放控制

###### `isAnimationPlaying`

播放状态在PAG中为`isPlaying`，获取结果与Lottie一致。



###### `loopMode`

循环模式在PAG中为`setRepeatCount`，其中0表示无限循环。loopMode中`autoReverse` \\`repeat`\ `repeatBackwards`暂时不支持。



###### `backgroundBehavior`

PAG目前不支持`backgroundBehavior`，默认会继续计算进度。



###### `shouldRasterizeWhenIdle`

PAG目前不支持`shouldRasterizeWhenIdle`，需要上层设置progress控制进度。



###### `progress`

`currentProgress`与PAG中`progress`一致。（注*：在PAG中，setProgress是不会刷新界面的，默认会在下一次绘制时更新界面。如果需要立即更新，比如暂停状态下，需要调用`flush`方法进行更新）

`currentTime`与`currentFrame`，在`PAGView`中暂不支持。（注*：`currentTime`可以在PAGLayer直接设置，从而控制每个图层的播放进度，`currentFrame`需要自行转换）。



###### `animationSpeed`

目前PAGView不支持`speed`控制，请直接控制`progress`来控制`speed`。



###### `respectAnimationFrameRate`

目前PAGView不支持`respectAnimationFrameRate`的选择，默认是按照设备屏幕刷新频率进行更新的。



###### `play`

PAGView的`play`方法既从当前`progress`开始播放。

> Lottie中的各类播放控制，PAG暂时没有支持，需要上层业务自己控制



###### `stop/pasue`

PAG中`stop`方法不会改变进度，只会停止更新画面，效果与Lottie中`pasue`相同。如果需要实现Lottie中`stop`效果，可以使用如下代码块：

```objc
[view stop];
[view setProgress:0];
[view flush];
```



###### `forceDisplayUpdate`

PAG中`flush`相当于`forceDisplayUpdate`方法，当flush调用时，如果画面有变化，会立刻刷新界面。如果需要画面无变化下也刷新，请调用`- (BOOL)flush:(BOOL)force;`方法