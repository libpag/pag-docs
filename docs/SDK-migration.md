---
id: SDK-migration
title: PAG SDK 迁移指南
---
---

> 目前 PAG 更专注于编辑能力，因此 Lottie 与 PAG 大部分接口比较类似，但有些 Lottie 接口 PAG 并没有支持，目前我们基于 iOS 接口简单对常用接口迁移进行说明。
---

在 iOS 端，PAG 目前只提供了 OC 对应接口，没有对 swift 进行进一步的支持。Lottie 目前推荐使用 swift，也同时提供了对应的 OC 接口。

下面我们将从 Lottie 的 `Animation(swift)`/`CompatibleAnimation(OC)`和`AnimationView(swift)`/`CompatibleAnimationView(OC)` 来简述 Lottie 和 PAG 常用接口的迁移。

## Animation(swift)/CompatibleAnimation(OC)

### 动效加载

Animation/CompatibleAnimation 在 Lottie 中提供动效的加载功能，在 PAG 中，我们使用 PAGFile 来加载动效。

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
> 1. PAG 不支持从 HTTP/HTTPS 加载文件，接入方需要把文件下载到本地，再从本地路径加载。
>
> 2. Lottie 提供协议 AnimationCacheProvider，进行文件高级加载控制。由于相对于 LottieAnimation 加载来说，PAGFile 的加载十分迅速，因此 PAG 并没有提供对应协议。



### 动效基本信息

其中 Lottie 可以获取动效的基本信息，包括 `version、type、startFrame、endFrame、frameRate、duration、width、height`。

在 PAG 中，PAGFile 也可以获取相关信息。

其中，`tagLevel` 对应 `version`，用于标记文件版本。在 PAG 中，高版本导出的 PAG 素材可以被低版本兼容，但是会丢失不支持的效果。

PAG 只支持 `type2d`，因此没有记录 `type` 属性。

PAG 文件默认从第 0 帧开始，因此 lottie 的 `startFrame`/`endFrame`/`duration` 对应于 PAG 中的 `duration`。

（注*：PAG 的 `duration` 单位是 microseconds）。

`frameRate` 对应 PAGFile 中的 `frameRate`，二者均表示文件帧率。

Lottie 中 `width/height` 对应 PAGFile 中的 `width/height`，单位和意义一致。



> 基于 Marker 的功能：
>
> PAG 支持在 Layer 中标记 Marker，但目前无法直接根据 Marker 获取帧号或者时长，因此如果有需要，可以通过获取 Layer 再判断 Layer 中的 Marker 信息进行计算。



## AnimationView(swift)/CompatibleAnimationView(OC)

AnimationView/CompatibleAnimationView 提供动效的播放功能，在 PAG 中，我们使用 PAGView 来进行基础动效的播放。

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



> PAGView 无法根据动效自动适应 View 的大小，需要通过代码根据 PAGFile 的信息控制 View 的 Frame。



### contentMode

Lottie 支持 `UIView` 的 `contentMode`，在 PAG 中，对应属性为 `scaleMode`。具体对应关系如下：

```
PAGScaleModeLetterBox -- UIViewContentModeScaleAspectFit (默认属性)
PAGScaleModeStretch -- UIViewContentModeScaleToFill*
PAGScaleModeZoom -- UIViewContentModeScaleAspectFill
```

对于其他属性，PAG 目前并没有支持，可以根据需要直接设置 `matrix`。（注*：`matrix` 与 `scaleMode` 为互斥属性）。



### 图片替换

Lottie 通过接口 `setImageProvider` 进行图片替换，在 PAG 中，`PAGView` 有 `- (void)replaceImage:(int)index data:(PAGImage*)value;` 这一接口。

其中 `index` 为对应 Layer 的 `editableIndex`，图片与文字各自维护一套。`PAGImage` 可以根据 `name`/`path`等各种方法创建，具体可以看 PAGImage 的对应接口。



### 文字替换

Lottie 通过接口 `setTextProvider` 进行文字替换，在 PAG 中，`PAGView` 有 `- (void)setTextData:(int)index data:(PAGText*)value;` 这一接口

其中 `index` 为对应 Layer 的 `editableIndex`，图片与文字各自维护一套。`PAGText` 包含文字各种属性，具体可以看 `PAGText` 对应的定义，推荐先获取 Layer 的 PAGText，再将修改后的 PAGText 设置给对应的 Layer。



### 播放控制

#### `isAnimationPlaying`

播放状态在 PAG 中为 `isPlaying`，获取结果与 Lottie 一致。



#### `loopMode`

循环模式在 PAG 中为 `setRepeatCount`，其中 0 表示无限循环。loopMode 中 `autoReverse`/`repeat`/`repeatBackwards` 暂时不支持。



#### `backgroundBehavior`

PAG 目前不支持 `backgroundBehavior`，默认会继续计算进度。



#### `shouldRasterizeWhenIdle`

PAG 目前不支持 `shouldRasterizeWhenIdle`，需要上层设置 progress 控制进度。



#### `progress`

`currentProgress` 与 PAG 中 `progress` 一致。（注*：在 PAG 中，setProgress 是不会刷新界面的，默认会在下一次绘制时更新界面。如果需要立即更新，比如暂停状态下，需要调用`flush`方法进行更新）

`currentTime` 与 `currentFrame`，在 `PAGView` 中暂不支持。（注*：`currentTime` 可以在 PAGLayer 直接设置，从而控制每个图层的播放进度，`currentFrame` 需要自行转换）。



#### `animationSpeed`

目前 PAGView 不支持 `speed` 控制，请直接控制 `progress` 来控制 `speed`。



#### `respectAnimationFrameRate`

目前 PAGView 不支持 `respectAnimationFrameRate` 的选择，默认是按照设备屏幕刷新频率进行更新的。



#### `play`

PAGView 的 `play` 方法既从当前 `progress` 开始播放。

> Lottie 中的各类播放控制，PAG 暂时没有支持，需要上层业务自己控制



#### `stop/pasue`

PAG 中 `stop` 方法不会改变进度，只会停止更新画面，效果与 Lottie 中 `pasue` 相同。如果需要实现 Lottie 中 `stop` 效果，可以使用如下代码块：

```objc
[view stop];
[view setProgress:0];
[view flush];
```


#### `forceDisplayUpdate`

PAG 中 `flush` 相当于 `forceDisplayUpdate` 方法，当 flush 调用时，如果画面有变化，会立刻刷新界面。如果需要画面无变化下也刷新，请调用 `- (BOOL)flush:(BOOL)force;` 方法

---
