---
id: pag-export
title: 导出PAG文件
---
---
### 概述

PAG同时支持「矢量预合成」直接导出和「BMP预合成」导出两种方式。

+ 「BMP预合成」：在导出时会自动进行截图方式导出，因此可以支持所有的AE特性，但是文件体积较大，也无法运行时编辑内容。BMP预合成通常用于无法矢量导出的场景，例如用了粒子效果或者第三方插件等。

+ 「矢量预合成」：导出的方式文件极小，并性能会优于BMP预合成，但仅支持部分AE特性。矢量预合成导出通常用于UI动画等对于文件大小和性能敏感，以及需要贴纸内容可编辑的场合。

为了保持动画的可编辑性，支持矢量和BMP预合成混合导出，BMP预合成可以被矢量预合成嵌套，作为它的一个图层来实现AE特效和可编辑的结合。

> 矢量预合成支持的具体特性列表可以参考：[<font color=blue>AE功能支持列表</font>](/docs/ae-support.html) </br>


### 准备工作

1，确保已经安装PAGViewer。[<font color=blue>如何安装PAGViewer</font>](/docs/install.html)<br/>
2，确保已经安装AE导出插件。[<font color=blue>如何安装AE导出插件</font>](/docs/install-PAGExporter.html)<br/>
3，打开AE软件，在菜单项中将会看到：“文件” -> “导出” -> “PAG File...”，则说明已经成功安装。<br/>

   PAG文件导出提供了两种方式，如下图所示：直接导出和导出插件面板导出，后置增加了导出插件面板的显示，方便查看AE工程中直接导出存在的问题，以及多了一些智能化的处理，具体参考导出插件版块<br/>
<img 
  alt='PAG文件导出' 
  src='https://pag.qq.com/website/static/img/docs/pag_hotkey_0.png' 
  style='width: 600px; height: 560px; margin: 48px 0; border-radius: 8px' 
/>
---
### 导出全矢量预合成的PAG文件

点击选中需要导出的合成(Composition)，然后点击菜单“文件” -> “导出” -> “PAG File...”，选择要保存的路径即可导出。<br/>
导出成功后双击导出的PAG文件可以直接预览动画。


### 导出含有BMP预合成的PAG文件
> 具体参考[<font color=blue>BMP预合成导出</font>](/docs/ae-bmp-guide.html)