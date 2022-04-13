---
id: sdk-web
title: Web端接入指南
---

---

> **当前版本为 Alpha 版本，部分功能不够稳定**
>
> **有问题可到[Issues](https://github.com/Tencent/libpag/issues/new/choose)或者 QQ 群反馈，会尽快修复**
>
> **更多特性持续开发中**

# 快速接入

SDK 的接入和使用请遵守 [<font color=blue>PAG SDK 个人信息保护规则</font>](https://privacy.qq.com/document/preview/01e79d0cc7a2427ba774b88c6beff0fd)

libpag Web 端 SDK 为 Javascript 文件，分为四个版本：ES Modules、CommonJS Modules、UMD 模块标准和 UMD 模块标准 Minify 后的压缩版。

## 浏览器兼容性

| [<img src="https://pag.qq.com/img/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://pag.qq.com/img/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://pag.qq.com/img/docs/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome for Android | [<img src="https://pag.qq.com/img/docs/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari on iOS | QQ Browser Mobile |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Chrome >= 69                                                                                                                                                      | Safari >= 11.3                                                                                                                                                    | Android >= 7.0                                                                                                                                                                | iOS >= 11.3                                                                                                                                                              | last 2 versions   |

更多版本的兼容工作正在进行中

**因受到微信浏览器“用户与页面交互之后才可以使用 Video 标签进行视频播放”规则的限制，PAG Web SDK 无法在微信浏览器下自动播放带有视频序列帧的 PAG 动画，建议设计师使用矢量导出。计划后续版本中提供一个解码器注入的接口，以及对应的 h264 解码器插件去解决这个问题。**

## 快速开始

可以用 `locateFile` 函数返回 `.wasm` 文件的路径，默认为 libpag.js 文件同目录下。

### Browser（推荐）

公共 CDN unpkg

```html
<script src="https://unpkg.com/libpag@latest/lib/libpag.min.js"></script>
```

公共 CDN jsdelivr

```html
<script src="https://cdn.jsdelivr.net/npm/libpag@latest/lib/libpag.min.js"></script>
```

PAG Initialize

```html
<canvas class="canvas" id="pag"></canvas>
<script src="https://unpkg.com/libpag@latest/lib/libpag.min.js"></script>
<script>
  window.libpag.PAGInit().then((PAG) => {
    // Do Something.
  });
</script>
```

### ES Module

NPM

```bash
$ npm i libpag
```

PAG Initialize

```javascript
import { PAGInit } from "libpag";

PAGInit({
  locateFile: (file) => "./node_modules/libpag/lib/" + file,
}).then((PAG) => {
  // Do Something.
});
```

ESModule 引入的方式需要打包构建的时候，需要把 node_modules 下的 libpag/lib 中的 libpag.wasm 文件打包到最终产物中。并使用 `locateFile` 函数指向 libpag.wasm 文件

### PAG simple demo

```javascript
// <canvas class="canvas" id="pag"></canvas>
const arrayBuffer = fetch("https://pag.io/file/like.pag").then((response) => response.arrayBuffer());
const pagFile = await PAG.PAGFile.load(arrayBuffer);
document.getElementById("pag").width = pagFile.width();
document.getElementById("pag").height = pagFile.height();
const pagView = await PAG.PAGView.init(pagFile, "#pag");
pagView.setRepeatCount(0);
await pagView.play();
```

## 渲染相关

### PAGView 尺寸过大

为了高清的渲染效果，PAGView 会按照 Canvas 尺寸 \* `devicePixelRatio` 作为实际渲染尺寸。
受设备自身性能影响 WebGL 的最大渲染尺寸可能各不相同。会出现渲染尺寸过大导致白屏的情况。

建议移动端下，实际渲染尺寸不大于 2560px。

### 多个 PAGView 实例场景

首先，因为 PAG Web 版是单线程的 SDK，所以我们不建议同屏播放多个 PAGView。

对于有多个 PAGView 实例的场景，我们需要先知道，浏览器环境中 WebGL 活跃的 context 数量是有限制的，Chrome 是 16 个，Safari 是 8 个。因为有这个限制存在，我们应当及时使用 `destroy` 回收无用的 PAGView 实例和移除 Canvas 的引用。

如果你需要在 Chrome 浏览器中同屏存在多个 PAGView 实例，可以尝试使用 canvas2D 模式，需要在 `PAGView.init` 的时候传入 `{ useCanvas2D: true }` 。

因为 Safari 上 [`CanvasRenderingContext2D.drawImage()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage) 的性能很差，所以我们不推荐在 Safari 上使用这个模式。

## More

更多 Web SDK 的内容请参考：[<font color=blue>这里</font>](https://github.com/Tencent/libpag/blob/main/web/README.md)

Web demo:

[<font color=blue>https://github.com/Tencent/libpag/tree/main/web</font>](https://github.com/Tencent/libpag/tree/main/web)

Web SDK 未来能力支持规划可以点击 [<font color=blue>这里</font>](https://github.com/Tencent/libpag/wiki/PAG-Web-roadmap) 查看
