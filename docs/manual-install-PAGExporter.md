---
id: manual-install-PAGExporter
title: 手动安装 AE 导出插件（windows）
---

	windows上安装 AE 导出插件时，因为权限和兼容性等问题，偶尔出现安装失败的情况，这时可以采用手动安装。

### 准备工作：
	1，确保已经安装了 AE（Adobe After Effects）（AE2018、AE2019、AE2020 皆可）<br/>
	2，确保已经安装 PAGViewer。[<font color=blue>如何安装 PAGViewer</font>](/docs/install.html)<br/>
	3，如果 AE 正在运行，则关闭<br/>
	4，先尝试[<font color=blue>自动安装</font>](/docs/install-PAGExporter.html)，自动安装失败再进行下面的手动安装

### 手动安装 AE 导出插件
主要是按下面3个步骤将 PAGViewer 安装目录下的某些文件拷贝到 AE 的相应目录。<br/>
##### 说明：<br/>
	PAGViewer 安装目录（示例）： C:\Program Files\PAGViewer <br/>
	AE 安装目录（示例）： C:\Program Files\Adobe\Adobe After Effects 2020\Support Files <br/>
	AE 公共目录（示例）： C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore <br/>

#### 1，拷贝导出插件 PAGExporter：
	![手动安装AE插件截图1](/img/docs/manual-install-PAGExporter1.jpg)
	将 PAGViewer 安装目录（如上图）下的 PAGExporter.aex 文件拷贝到 AE 安装目录下的 Plug-ins 目录（如下图）
	![手动安装AE插件截图2](/img/docs/manual-install-PAGExporter2.jpg)

#### 2, 拷贝 QT dll 库：
	![手动安装AE插件截图3](/img/docs/manual-install-PAGExporter3.jpg)
	打开 PAGViewer 的安装目录下 "QT dll" 目录里（如上图）的所有文件和文件夹拷贝到 AE 安装目录（如下图）
	![手动安装AE插件截图4](/img/docs/manual-install-PAGExporter4.jpg)

#### 3、拷贝其它插件：
	![手动安装AE插件截图5](/img/docs/manual-install-PAGExporter5.jpg)
	将 PAGViewer 安装目录（如上图）下的 ImageFillRule.aex 和 TextBackground.aex 这两个文件拷贝到 AE 公共目录（如下图）
	![手动安装AE插件截图6](/img/docs/manual-install-PAGExporter6.jpg)

### 验证
	打开AE软件，在菜单项中将会看到：“文件” -> “导出” -> “PAG File...”，则说明已经成功安装。