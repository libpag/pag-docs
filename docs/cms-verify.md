---
id: cms-verify
title: PAG性能校验使用指南
---

### 背景
为了保障pag贴纸在线上使用时的性能，需要先对pag文件进行性能校验，没有进行性能校验的pag文件无法上传到后台。

### 操作指引
1. 打开PAGViewer，检查软件版本，确保PAGViewer的版本号为1.3.2或以上。(如果低于1.3.2请更新到最新版本)
2. 正常打开某pag文件。
3. 点击文件菜单“File”下的“Verify”。(1.4.34之后，为“文件”菜单下的“性能校验”)如下图：<br/>
![PAGConfig1截图](/img/docs/cms-verify-1.jpg)
<br/>

4. 执行步骤3后将弹出如下图所示的进度条。<br/>
![PAGConfig1截图](/img/docs/cms-verify-2.jpg)
<br/>

5. 进度条结束后会弹窗显示校验完成（如下图）。点击“确定”即可。<br/>
![PAGConfig1截图](/img/docs/cms-verify-3.jpg)
<br/>

6. 注意：上面的校验流程只是将性能数据写入PAG文件，不一定表示这些性能数据满足后台CMS对PAG上线的性能要求，如果不满足要求则需要优化pag文件的设计。