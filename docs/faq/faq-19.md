---
id: faq-19
title: 生成视频的时长在不同手机上表现不一致
---

---

> ### 问：Android端pag生成视频的时长在不同的手机上表现不一致，甚至相差10秒左右
这里是时间戳设置问题，不能将系统时间戳用于视频编码，不同配置的手机解码性能是不一样的，都会影响到时间戳。需要通过渲染进度计算出来准确的时间戳，脱离跟运行性能的关联。

---