---
id: pag-music-mark
title: 如何在AE中到导出音频
---
### 如何在AE中到导出音频
1. 升级版本：升级 PAGViewer 至最新的 beta 版 （2.0.0或以上）。[<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>
2. 将音频文件添加到目标合成中即可。

### 查看音频是否导出成功
在PAGViewer中查看PAG文件结构：getRootLayer：PreComposition -> composition:VectorComposition -> audioBytes 的值，来判断pag文件中音频输入是否导出成功，为{}时导出成功，为<null>导出失败

导出成功：
![](/img/docs/export_music_success.png)

导出失败：
![](/img/docs/export_music_failed.png)

### 说明
1. 音乐图层必须在非BMP预合成中，不能出现在BMP预合成（"_bmp") 中；
2. 如果总合成是BMP预合成 ("_bmp") 时，音乐图层应该与之并列，再构成一个新的非BMP预合成，这个新的总合成包含原来的BMP预合成和新增的音乐图层；
