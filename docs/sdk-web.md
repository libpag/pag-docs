---
id: sdk-web
title: Web端接入指南
---

---

# 快速接入

SDK 的接入和使用请遵守 [<font color=blue>PAG SDK 个人信息保护规则</font>](https://privacy.qq.com/document/preview/01e79d0cc7a2427ba774b88c6beff0fd)

## 特性

- Web 平台能力适配，支持 libpag 全能力
- 基于 WebAssembly + WebGL

## 浏览器兼容性

| [<img src="https://pag.qq.com/img/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://pag.qq.com/img/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://pag.qq.com/img/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome for Android | [<img src="https://pag.qq.com/img/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari on iOS | QQ Browser Mobile |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Chrome >= 69                                                                                                                                                      | Safari >= 11.3                                                                                                                                                    | Android >= 7.0                                                                                                                                                                | iOS >= 11.3                                                                                                                                                              | last 2 versions   |

更多版本的兼容工作正在进行中

**因受到微信浏览器“用户与页面交互之后才可以使用 Video 标签进行视频播放”规则的限制，PAG Web SDK 无法在微信浏览器下自动播放带有视频序列帧的 PAG 动效，建议设计师使用矢量导出。如果有在微信浏览器中自动播放带视频序列帧的需求可以注册软件解码器来解决，可在下文中得到答案。**

## 快速开始

### Browser（推荐）

```html
<canvas class="canvas" id="pag"></canvas>
<script src="https://unpkg.com/libpag@latest/lib/libpag.min.js"></script>
<script>
  window.onload = async () => {
    // 实例化 PAG
    const PAG = await window.libpag.PAGInit();
    // 获取 PAG 素材数据
    const buffer = await fetch("https://pag.io/file/like.pag").then(
      (response) => response.arrayBuffer()
    );
    // 加载 PAG 素材为 PAGFile 对象
    const pagFile = await PAG.PAGFile.load(buffer);
    // 将画布尺寸设置为 PAGFile的尺寸
    const canvas = document.getElementById("pag");
    canvas.width = pagFile.width();
    canvas.height = pagFile.height();
    // 实例化 PAGView 对象
    const pagView = await PAG.PAGView.init(pagFile, canvas);
    // 播放 PAGView
    await pagView.play();
  };
</script>
```

调用 libpag.js 上的 `PAGInit()` 方法时，默认会加载 libpag.js 同一目录下的 libpag.wasm 文件。如果你希望把 libpag.wasm 放在其他目录下，则可以使用 `locateFile` 将 libpag.wasm 的路径返回给 `PAGInit()` 方法。如下

```js
const PAG = await window.libpag.PAGInit({
  locateFile: (file) => "https://pag.io/file/" + file,
});
```

### ES Module

```bash
$ npm i libpag
```

```js
import { PAGInit } from "libpag";

PAGInit().then((PAG) => {
  // 实例化 PAG
});
```

**使用 ESModule 引入的方式需要注意，像 Webpack 和 Rollup 等打包工具是默认没有打包 .wasm 文件的。也就是说如果你的项目时 Vue / React 这类使用脚手架构建的项目需要把 node_modules 下的 libpag/lib/libpag.wasm 文件打包到最终产物中，并且使用 `locateFile` 钩子返回 libpag.wasm 文件的路径，这样才能确保在网络请求中能加载到 libpag.wasm 文件**

Demo 项目提 [pag-web](https://github.com/libpag/pag-web) 供了简单的接入示例和 Vue / React / PixiJS 等配置示例， 可以点击 [这里](https://github.com/libpag/pag-web) 查看。

更多的 API 接口可以阅读 [API 文档](https://pag.io/api.html#/apis/web/)。

## 渲染相关

### PAG 渲染尺寸

在 Web 平台上，设备像素分辨率与 CSS 像素分辨率是不同的，而它们之比被称为 `devicePixelRatio`。所以当我们需要显示 CSS 像素 1px 时， 需要 1px \* `devicePixelRatio` 的渲染尺寸。

PAG 默认会对 Canvas 在屏幕中的可视尺寸进行缩放计算后进行渲染，因此会对 Canvas 的宽高以及 `style` 产生副作用。如果希望 PAG 不对 Canvas 产生副作用， 可以在 `PAGView.init` 的时候传入 `{ useScale: false }` 来取消缩放。

### PAGView 尺寸过大

为了高清的渲染效果，PAGView 默认会按照 Canvas 尺寸 \* `devicePixelRatio` 作为实际渲染尺寸。
受设备自身性能影响 WebGL 的最大渲染尺寸可能各不相同。会出现渲染尺寸过大导致白屏的情况。

建议移动端下，实际渲染尺寸不大于 2560px。

### 多个 PAGView 实例场景

首先，因为 PAG Web 版是单线程的 SDK，所以我们不建议同屏播放多个 PAGView。

对于有多个 PAGView 实例的场景，我们需要先知道，浏览器环境中 WebGL 活跃的 context 数量是有限制的，Chrome 是 16 个，Safari 是 8 个。因为有这个限制存在，我们应当及时使用 `destroy` 回收无用的 PAGView 实例和移除 Canvas 的引用。

如果你需要在 Chrome 浏览器中同屏存在多个 PAGView 实例，可以尝试使用 canvas2D 模式，需要在 `PAGView.init` 的时候传入 `{ useCanvas2D: true }` 。

因为 Safari 上 [`CanvasRenderingContext2D.drawImage()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 的性能很差，所以我们不推荐在 Safari 上使用这个模式。

### 注册解码器

对于“用户与页面交互之后才可以使用 Video 标签进行视频播放”规则的限制，PAG Web 版提供软件解码器注入接口 ` PAG.registerSoftwareDecoderFactory()`。

注入软件解码器后，PAG 会调度软件解码器去对视频序列帧进行解码与上屏，从而实现部分平台进入页面自动播放的功能。

推荐解码器接入：https://github.com/libpag/ffavc/tree/main/web

已知“用户与页面交互之后才可以使用 Video 标签进行视频播放”限制的平台有：移动端微信浏览器，iPhone 省电模式，部分 Android 浏览器。

## More

更多 Web SDK 的内容请参考：[<font color=blue>这里</font>](https://github.com/Tencent/libpag/blob/main/web/README.md)

Web demo:

[<font color=blue>https://github.com/libpag/pag-web</font>](https://github.com/libpag/pag-web)

Web SDK 未来能力支持规划可以点击 [<font color=blue>这里</font>](https://github.com/Tencent/libpag/wiki/PAG-Web-roadmap) 查看
