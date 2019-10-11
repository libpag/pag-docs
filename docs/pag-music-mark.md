---
id: pag-music-mark
title: 如何在AE中到导出音频
---
### 如何在AE中到导出音频
1. 升级版本：升级 PAGViewer 至最新的 beta 版 （2.0.0或以上）。[<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>
2. 将音频文件添加到目标合成中即可。如需为音频图层添加Marker信息(如MusicID)，可参考以下步骤。

### 如何在AE中为音频图层添加MusicID
1. 升级版本：升级 PAGViewer 至最新的 beta 版 （2.0.0或以上）。[<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>
2. 选中要标记的音乐图层，点击：“After Effect CC” -> "图层" -> "添加标记"，即可为图层新增标记锚点。
![](/img/docs/music_mark_setting1.png)
3. 点击已添加的标记锚点，右键选择"设置"即可弹出"图层标记"面板。
![](/img/docs/music_mark_setting2.png)

4. 如下图所示，在注释设置框总，按照格式输入MusicID，如“ {"musicID" : "000rnXvS2DFTXb"} ”。
![](/img/docs/music_mark_setting.png)

### 说明
1. MusicID必须打在音乐图层上；
2. 音乐图层必须在矢量预合成中，不能出现在序列帧预合成（"_bmp") 中；
3. 如果总合成是序列帧预合成 ("_bmp") 时，音乐图层应该与之并列，再构成一个新的矢量总合成，这个新的总合成包含原来的序列帧和新增的音乐图层；
