---
id: sdk-web
title: Web端接入指南
---
---

> **当前版本为 Alpha 版本，部分功能不够稳定**
> 
> **有问题可到[Issues](https://github.com/Tencent/libpag/issues)或者 QQ 群反馈，会尽快修复**
>
> **更多特性持续开发中**

# 快速接入

libpag Web 端 SDK 为 Javascript 文件，分为四个版本：ES Modules、CommonJS Modules、UMD 模块标准和 UMD 模块标准 Minify 后的压缩版。

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chrome >= 87                                                                                                                                                                                                  | Safari >= 11.1                                                                                                                                                                                                |

Chrome 69+ 与 Firefox 兼容工作正在进行中

## 快速开始

可以用 `locateFile` 函数返回 `.wasm` 文件的路径，默认为 libpag.js 文件同目录下。

### Browser（推荐）

公共CDN unpkg

``` html
<script src="https://unpkg.com/libpag@latest/lib/libpag.min.js"></script>
```

公共CDN jsdelivr

``` html
<script src="https://cdn.jsdelivr.net/npm/libpag@latest/lib/libpag.min.js"></script>
```

PAG Initialize

```html
<canvas class="canvas" id="pag"></canvas>
<script src="https://unpkg.com/libpag@latest/lib/libpag.min.js"></script>
<script>
  window.libpag
    .PAGInit()
    .then((PAG) => {
      const url = 'https://pag.io/file/like.pag'
      fetch(url)
        .then((response) => response.blob())
        .then(async (blob) => {
          const file = new window.File([blob], url.replace(/(.*\/)*([^.]+)/i, '$2'));
          // Do Something.
        });
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
import { PAGInit } from 'libpag';

PAGInit({
  locateFile: (file) => './node_modules/libpag/lib/' + file,
}).then((PAG) => {
  const url = 'https://pag.io/file/like.pag'
  fetch(url)
    .then((response) => response.blob())
    .then(async (blob) => {
      const file = new window.File([blob], url.replace(/(.*\/)*([^.]+)/i, '$2'));
      // Do Something.
    });
});
```

### PAG simple demo

```javascript
// <canvas class="canvas" id="pag"></canvas>
const pagFile = await PAG.PAGFile.load(file);
document.getElementById('pag').width = await pagFile.width();
document.getElementById('pag').height = await pagFile.height();
const pagView = await PAG.PAGView.init(pagFile, '#pag');
pagView.setRepeatCount(0);
await pagView.play();
```

更多 Web SDK 的内容请参考：[<font color=blue>这里</font>](https://github.com/Tencent/libpag/blob/main/web/README.md)

**Web DEMO:**

[<font color=blue>https://github.com/Tencent/libpag/tree/main/web</font>](https://github.com/Tencent/libpag/tree/main/web)

---