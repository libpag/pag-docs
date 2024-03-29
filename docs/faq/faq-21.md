---
id: faq-21
title: AE 导出插件闭源的原因
---

---

> ### 问：PAG 的 AE 导出插件闭源的原因是什么呢？未来会开源么？
答案是不会。举个大家比较熟悉的例子可能更好理解：谷歌的 Chrome 浏览器也不是开源的，开源的是核心的 Chromium 项目。目前开源的 libpag 项目不只是一个渲染库，PAG 文件的核心编解码模块也在其中是完全开源的。所以从原理上如果你希望从头实现一个 AE 导出插件，现在并不存在什么技术上的阻碍，只需要调用 AE SDK 和 PAG 的编码 SDK 即可，剩下的都是一些 UI 业务代码的工作，这部分并没有多少技术含量。那为什么我们不开源这部分 UI 业务的代码呢？实际上你如果只是正常使用 PAG 方案，不是为了快速创造一种不兼容的 PAG 分裂格式，是不会涉及到任何 AE 导出插件代码的内容。但如果开源这部分代码，会显著降低创造一种新的分裂格式的门槛。PAG 的格式跟其他各种图片格式不太一样，它并不是制定完标准后就固化的格式，而是一种动态演进的格式，会随着 AE 功能的支持变多而不断增量变化。如果采用去中心化的管理方式，我们很难保证 PAG 的通用一致性。一旦产生很多分裂版本的格式后，会沦为某些特定业务的私有格式，各种优化无法回馈到社区。设计师也要面对同一个资源可能要导出多种格式的额外工作量，并且需要重复生产大量相似的动效素材，而不能直接复用存量已经导出的资源。这对动效素材社区的发展不利，也是我们非常不愿意看到的。

---