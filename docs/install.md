---
id: install
title: 安装PAGViewer
---
---

目前 PAG 预览程序支持 macOS 和 Windows 操作系统。

> 安装若遇到问题请提交 [<font color=blue>issue</font>](https://github.com/libpag/libpag/issues/new?assignees=&labels=&template=bug_report.md&title=) 反馈<br/>

## macOS
#### 命令行安装

	curl -s dldir1.qq.com/qqmi/libpag/install|bash

复制以上文本内容如，粘贴到「终端」程序按下回车即可开始在线安装，安装过程可能会要求输入本机密码以获取文件写入权限。

目前 PAGViewer 预览程序和 AE 导出插件仅支持 macOS 10.9以上。安装成功后，PAGViewer会出现在「应用程序」文件夹中，并自动关联本地pag文件，双击pag文件即可呼起 PAGViewer 直接预览播放。

#### 图形化安装
[<font color=blue>PAGViewer.dmg</font>](https://dldir1.qq.com/qqmi/libpag/PAGViewer.dmg) 点击下载离线安装包，双击打开PAGViewer.dmg文件，拖拽PAGViewer到应用程序文件夹即可。

> PAGViewer 支持切换到 Beta 版本来使用最新的 PAG 特性。关于如何升级到 Beta 版可以 [<font color=blue>点击这里</font>](/docs/beta.html)。

---

## Windows
PAGViewer Beta 版现在支持在 Windows 下预览 PAG 文件。安装成功后，PAGViewer 会出现在开始菜单中，并自动关联本地 pag 文件，双击 pag 文件即可呼起 PAGViewer 直接预览播放。

#### 下载安装
[<font color=blue>PAGViewer_Installer.exe</font>](https://dldir1.qq.com/qqmi/libpag/PAGViewer_Installer.exe) 点击下载安装程序，双击即可安装，安装过程中可能会要求取得管理员权限。

#### 快速上手
[<font color=blue>点击这里</font>](pag-viewer.html) 查看 PAGViewer Beta 版使用指南。

---

## 检查更新
首次安装成功后，只要有发布新版本，打开 PAGViewer 时会自动提示在线下载更新，点击确认并输入本机密码即可完成在线更新。若有插件新版本，插件更新会在 PAGViewer 更新完成重新启动时再提示。

如果意外点击了跳过更新的选项，可以手动在菜单项：PAGViewer->Check for Updates... 来触发更新检查。



## 测试素材
下载 [<font color=blue> pag_files.zip </font>](/file/pag_files.zip) 并解压，直接双击文件夹里的 pag 文件，即可看到动画的预览效果。其中的 **Replacement.pag** 文件是个占位图动画示例，你可以双击打开它后拖拽任意一张其他图片到窗口里，即可看到窗口里的动画效果被套用到了拖进去的图片上。您也可以直接使用压缩包里的 AE 源文件自行导出 pag 文件进行预览。

---