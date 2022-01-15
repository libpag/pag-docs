---
id: pag-music-mark
title: 如何在AE中导出音频
---
---
## 如何在AE中导出音频
1. 升级版本：升级 PAGViewer 至最新的 beta 版 （2.0.0或以上）。[<font color=blue>如何升级至beta版</font>](/docs/beta.html) <br/>
2. 将音频文件添加到目标合成中即可。

## 查看音频是否导出成功
在PAGViewer中查看PAG文件结构：</br>
根据 getRootLayer：PreComposeLayer -> composition:VectorComposition -> audioBytes 的值，来判断pag文件中音频输入是否导出成功，为 {} 时导出成功，为 null 时导出失败


### 导出成功：
<img 
  src='https://pagio-1251316161.cos.ap-nanjing.myqcloud.com/img/docs/export_music_success.png' 
  style='width: 700px; margin: 32px 0 48px 0' 
/>

---

### 导出失败：
<img 
  src='https://pagio-1251316161.cos.ap-nanjing.myqcloud.com/img/docs/export_music_failed.png' 
  style='width: 700px; margin: 32px 0 48px 0' 
/>

---

## 音频文件的格式

#### pag中音频文件编码格式为aac，容器格式为mpeg-4

---