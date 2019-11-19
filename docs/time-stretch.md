---
id: time-stretch
title: 如何使用TimeStretch(时间伸缩)插件
---

### 如何使用TimeStretch(时间伸缩)插件
#### 一、准备：确认版本和配置 <br/>
1. 版本：确保 PAGViewer 已经更新至 beta 版 2.1.15 或以上。 [<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>
2. 配置：打开 AE，点击 “After Effect CC” -> “首选项” -> “PAG Config...”，在弹出窗口中设置 “导出版本控制”为“beta”，然后“确定”保存配置。如下图：<br/>
![导出beta](/img/docs/export-beta.jpg)
<br/>
#### 二、添加时间伸缩：<br/>
3. 在总合成上添加标注（标注不是加在子合成上，也不是在图层上，而是加在总合成上），步骤如下图：<br/>
![时间伸缩](/img/docs/time-stretch-1.jpg)
<br/>
4. 修改标注内容：如下图：<br/>
![时间伸缩](/img/docs/time-stretch-2.jpg)
<br/>

  标注内容如下几种：<br/>

    a. 无：
#timestretchmode
none

    b. 伸缩：
#timestretchmode
scale

    c. 重复：
#timestretchmode
repeat

    d. 倒序重复（播放到结尾后倒序播放）
#timestretchmode
repeatinverted

5. 修改伸缩的起始时间。(见上图步骤3)
6. 导出：正常导出 pag 文件即可。<br/>

### 注意：
1. 标注应该添加在总合成上，而不是子合成上，也不是在图层上。