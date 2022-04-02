---
id: ae-bmp-guide
title: BMP预合成导出
---
---
在实际使用的过程中，我们发现部分AE特性渲染耗时较高，如AE特效、轨道遮罩等，Lottie的渲染同样也存在这个问题，在移动端展示的时候很难做到实时渲染。同时，虽然我们支持了常用的AE特性，但仅仅是所有AE特性中很少的一部分，这在一定程度上限制了设计师的创造力。于是我们增加支持了BMP预合成的导出方式，支持导出所有AE特性，适用于不可编辑的场景。其原理是将AE特效渲染成图片序列帧，进而导出成视频，针对视频不包含透明通道的问题，我们扩展了视频透明通道的支持，以很高的帧间压缩率实现了那些不能支持的特效，并且支持在平台端开启硬件加速解码。
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_1.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>
<p style='margin: -24px 0 48px 262px'><font size="2">图1 视频透明通道支持</font></p>

---
与此同时，我们增加支持了矢量和BMP预合成混合导出，从而实现在支持AE所有特性的同时又保持运行时的可编辑性。
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_2.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>
<p style='margin: -24px 0 48px 262px'><font size="2">图2 PAG矢量和BMP预合成混合导出</font></p>

---
### 一、BMP使用前提
> 如上文背景所述，当需要使用的AE特性用矢量导出的方式无法在PAG中完美支持时，就需要将对应的合成设置成BMP进行导出。

PAG目前支持的AE特性可以参考文章：[<font color=blue>AE功能支持列表</font>](/docs/ae-support.html) 

### 二、BMP使用步骤
#### 步骤一: 从图3所示入口，进入主页面
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_3.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>
<p style='margin: -24px 0 48px 260px'><font size="2">图3 导出主面板入口</font></p>

---
#### 步骤二: 从图4所示入口，进入合成设置页
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_4.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>
<p style='margin: -24px 0 48px 260px'><font size="2">图4 导出主面板-合成设置页入口</font></p>

---
#### 步骤三：在合成设置页中, 点击对应合成的BMP复选框
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_5.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>
<p style='margin: -24px 0 48px 260px'><font size="2">图5 合成设置页—BMP复选框</font></p>

---
#### 步骤四：如图6所示，勾选BMP复选框后，会有二次确认弹框，点击确认完成
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_6.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>
<p style='margin: -24px 0 48px 260px'><font size="2">图6 BMP确认提示框</font></p>

如图7所示完成勾选之后，AE中可以看到对应的合成名称，自动带上了BMP后缀，说明当前合成在导出过程中，将会以BMP的格式进行编码。
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_7.png' 
  style='width: 620px; margin: 32px 0 48px 0' 
/>

---

### 三、注意事项
过多使用BMP导出，会导致最终的PAG文件性能消耗过大，因此，在设计过程中，尽量使用PAG已经支持的AE特性来达到设计效果，而不是首选将合成以BMP形式导出

### 四、兼容旧版本
#### 1. 标记BMP方式兼容
旧版本的导出插件，以人工修改合成名的方式进行BMP设置，直接在AE中进行操作，新版本中也兼容旧版本的操作方式。
> 注意：人工修改合成名的方式，容易出错，并且新来的同学可能也不知道BMP后缀这个用法，应尽量避免使用

#### 2.BMP导出格式兼容
BMP的导出编码格式有两种，一种是图片序列帧的方式，另一种是视频序列帧的方式。视频序列帧的体积和性能都有优势，不建议使用图片序列帧。但是留有入口可以供选择，如图8所示。
<img 
  src='https://pag.qq.com/website/static/img/docs/bmpGuide/bmp_guide_8.png' 
  style='margin: 32px 0 48px 0' 
/>
<p align="center"><font size="2">图8 图片-视频序列帧入口</font></p>

---