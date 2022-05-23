---
id: faq-6
title: PAG 支持 Flutter 使用吗
---

---

> ### 问：PAG 支持 Flutter 使用吗？
PAG 支持 Flutter 使用，目前已经有成功使用的案例，需要业务层做些适配。具体原理是通过外部纹理做桥接，PAG 可以将动画逐帧绘制到指定的纹理上。因此，外部的任何框架包括 Flutter 只要能提供一个纹理给 PAG 绘制，都可以完美实现桥接或融合。具体请搜索 Flutter 外接纹理接口，提供一个纹理包装成 PAGSurface后，然后使用 PAGPlayer 正常进行绘制控制即可。

---