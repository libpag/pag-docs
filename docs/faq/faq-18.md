---
id: faq-18
title: 如何只播放 PAG 文件的某个区间或者调整播放速度
---

---

> ### 问：如何只播放 PAG 文件的某个区间或者调整播放速度？在 PAGView 上没有找到接口。
这类功能大家可能直觉地会想到去 PAGView 或 PAGPlayer 这些播放控制类上找，但其实应该通过操作 PAGFile 来实现任何定制化的播放需求。 

- 区间播放：首先通过 PAGComposition.Make() 方法创建一个空的 PAGComposition 容器，然后通过它的 addLayer 接口添加你想要播放的 PAGFile 对象。接着你可以对这个 PAGFile 调用 setStartTime 和 setDuration 来控制你想播放的具体区间。最后把这个总的 PAGComposition 交给 PAGView 去播放即可。
  
  举例：一个8s长的pag文件需要循环播放3~6s，将PAGFile添加到PAGComposition后，设置PAGFile的startTime为-3000000，duration为6000000
- 变速播放：首先设置 PAGFile.setTimeStretchMode(PAGTimeStretchMode.Scale)，然后通过 PAGFile.setDuration() 接口设置你想变速后播放的时长即可，设置比原始更长时间是慢速播放，设置更短时间是快速播放。

PAG 提供了非常灵活的图层级别控制 API，运行时可以自由排列组合多个 PAGFile，通过 setStartTime 和 setDuration 控制时间轴，通过 setMatrix 控制相对位置，也可以对图层进行增删改等等。具体可以参考 PAGLayer 以及 PAGComposition 等类的相关接口。通过图层级别的控制 API，你也可以设计一系列复杂的原子特效组合特性，在制作 PAG 素材时就不在需要把各种排列组合的场景都逐一在 AE 拼装导出一遍，而是只要导出拆分的原子 PAG 文件，然后运行时通过编程控制可以组合出无限种类的效果。

---