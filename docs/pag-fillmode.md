---
id: pag-fillmode
title: PAG填充模式
---
---
## 填充模式场景
PAG填充模式主要出现在以下两种场景：
1. 当渲染的尺寸（PAGView、PAGSurface的大小）和pag文件的尺寸不一致时
2. 当pag动效中占位图的尺寸和填充图片尺寸不一致时

## 填充模式
#### PAG支持以下几种填充模式：

+  None：不缩放，左上角位置开始裁剪

+  LetterBox：黑边，在保持高宽比的情况下缩放到设备的可用屏幕大小，图像不发生变形，如果图片尺寸和填充区域比例不一致，会出现黑边，为默认填充模式

+  Stretch：拉伸，不保持宽高比填充，会发生失变形

+  Zoom：裁剪，在保持高宽比的情况下缩放到完全填满可用的屏幕大小

<img 
  src='https://pag.qq.com/website/static/img/docs/pag_fillmode.jpeg' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>

---
<img 
  src='https://pag.qq.com/website/static/img/docs/image_fill_setting.jpg' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>

> 如果以上填充模式不满足需求，支持设置PAG渲染内容或填充图片的Matrix，具体可以查询相关API接口

## 占位图替换格式
替换格式分为三种：</br>
+ 替换: 添加标签 {"videoTrack": 1} </br>
+ 不替换: 添加标签 {"noReplace": 1}</br>
+ 默认: 不添加标签</br>

(注：PAG里只是提供标签，具体是否替换需要业务决定，这些标签只是给业务提供决定是否替换的依据)

---