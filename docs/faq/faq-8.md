---
id: faq-8
title: PAG 文件在移动端播放不出声音
---

---

> ### 问：PAG 文件为什么在移动端播放不出声音？
PAG 文件支持集成音频数据，导出方法具体方法参照 [<font color=blue>如何在AE中导出音频</font>](https://pag.io/docs/pag-music-mark.html)。但 PAG SDK 仍然还是一个动画渲染库，目前只渲染画面的部分，播放或者合成到视频需要业务方使用音视频框架自行处理。研发侧可以从 PAGFile.audioBytes 接口上读取 PAG 内置的音频数据，将它存储为本地文件使用或者直接在内存中解码都可以。audioBytes 字节流的编码格式为 AAC，容器格式为 MPEG-4。


---