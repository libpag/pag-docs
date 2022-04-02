---
id: pag-viewer
title: PAGViewer Beta 版快速上手
---

### 主界面
启动 PAGViewer 后，您可以通过“文件”菜单，或者拖动一个 pag 文件到窗口中开始预览。打开 pag 文件后会自动开始播放，您可以使用按钮或者快捷键来控制播放状态。

![主界面](https://pag.qq.com/website/static/img/docs/player-ui.png)

### 快捷键说明
下面列出了常用的快捷键，您也可以在菜单项中看到对应的快捷键。

| 快捷键 | 说明 |
| ------ | -------- |
| Ctrl + O | 打开文件 |
| Ctrl + P | 导出当前帧为 PNG 文件 |
| 方向键上 ↑ | 暂停并回到首帧 |
| 方向键下 ↓ | 暂停并回到最后一帧 |
| 方向键左 ← | 暂停并回到前一帧 |
| 方向键右 → | 暂停并回到后一帧 |
| 空格键 | 暂停/播放 |
| B | 显示/隐藏 背景色 |
| L | 显示/隐藏 功能面板 |
| Ctrl + Q | 关闭当前窗口 |

![菜单](https://pag.qq.com/website/static/img/docs/player-menu.png)

### 显示 pag 背景色
默认状态下，PAGViewer 使用灰白格子作为背景，方便查看 pag 中的透明区域，您可以点击“开关背景”按钮或者菜单项（快捷键 B）来显示 pag 的背景色。
    
>提示：您可以在 AE 中设置需要导出的合成(Composition)的背景色，会自动导出到 pag 文件中。

![显示 pag 背景色](https://pag.qq.com/website/static/img/docs/player-toggle-bg.png)

### 功能面板
PAGViewer 内置了调试 pag 文件的许多功能，比如性能分析面板，文本和占位图替换面板。您可以点击“开关功能面板”按钮或者菜单项（快捷键 L）来打开它。

![功能面板](https://pag.qq.com/website/static/img/docs/player-toggle-panel.png)

#### 功能面板结构
* 图层编辑区域会根据 pag 文件的不同，显示该文件中可供修改和替换的 文本/图片 资源。
* 文件信息区域显示了最常用的文件信息
* 性能面板实时显示 pag 文件渲染的各种性能参数。并用不同颜色区分显示 渲染 / 图片解码 / 上屏 所需要的时间，方便快速发现问题以对 pag 调优。


>提示: 关于文件信息和性能指标的介绍可以暂时看[<span style="color:blue">这篇 PAGViewer 的性能面板介绍</span>](profiler.html)。

### 文本图层编辑
打开具有可编辑文本图层的 pag 文件，在功能面板就可以看到所有的文本图层了。

#### 简单文本编辑
可以在列表中直接点击文字进行编辑，按回车键应用修改。

![简单文本编辑](https://pag.qq.com/website/static/img/docs/player-text-inline.png)

点击撤销按钮，可以撤销对图层的所有修改。

![撤销按钮](https://pag.qq.com/website/static/img/docs/player-text-reset.png)

#### 文本编辑面板

当需要修改字体、字号、颜色等等高级文本属性的时候，可以点击图层的“编辑”按钮。在编辑过程中您可以实时看到场景中文字的变化，方便随时调整。点击确认按钮应用修改或者 [x] 按钮撤销更改。

![高级文本编辑](https://pag.qq.com/website/static/img/docs/player-text-dialog.png)


### 图片图层编辑
打开具有可替换图片图层的 pag 文件，在功能面板就可以看到所有的图片图层了。

您可以点击替换按钮选择一个图片文件进行替换。也可以把一张图片拖动到列表或者舞台中想要替换的图片上方进行替换。

![图片编辑](https://pag.qq.com/website/static/img/docs/player-img-edit.png)

### 设置面板

![设置面板](https://pag.qq.com/website/static/img/docs/player-settings.png)
您可以通过菜单 “文件/设置” 打开设置菜单。

* 显示文件中的BMP预合成。可以设置 PAGViewer 是否跳过BMP预合成的渲染。
* 自动检查更新。可以设置 PAGViewer 是否自定检查更新。
* 使用 Beta 版本的 PAG 和 AE 导出工具。设置是否使用 beta 版功能。