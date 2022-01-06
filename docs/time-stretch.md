---
id: time-stretch
title: PAG时间伸缩
---

由于pag动画的时长是固定的，在某些场景需要pag文件的时长能够动态变化，于是增加了时间伸缩的功能。当设置PAG的播放时长和pag文件时长不一致时，会应用时间伸缩。

### 如何使用时间伸缩(TimeStretch)插件
#### 一、准备：确认版本 <br/>
1. 确保 PAGViewer 已经更新至 beta 版 2.1.81 或以上。 [<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>

#### 二、设置时间伸缩：<br/>
1. 打开导出面板: “文件”菜单 -> “导出” -> "PAG Panel...". 如下图：<br/>
   ![导出面板入口](/img/docs/export_panel_entrance.jpg)
   <br/>
2. 在导出面板中点击“设置”下的按钮，如下图：<br/>
   ![时间伸缩](/img/docs/export_panel_setting.jpg)
   <br/>
3. 在设置面板中点击“时间伸缩”页，即可设置时间伸缩的相关参数，如下图：<br/>
   ![时间伸缩](/img/docs/time-stretch-3.jpg)
   <br/>
   伸缩模式：<br/>
   none：不拉伸<br/>
   scale：线性拉伸<br/>
   repeat:重复<br/>
   repeatinverted：倒序重复（播放到结尾后倒序播放）<br/>

   伸缩区间：<br/>
   当模式为scale时有效，其它模式无效，一个pag文件仅能有一个拉伸区间<br/>
4. 击“确定”结束设置。<br/>
