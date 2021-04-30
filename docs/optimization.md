---
id: optimization
title: PAG素材优化指南
---

### 背景

在AE中，相同的动画特效，可以有许多不同的实现方式，导出成PAG文件，在终端渲染效果是一样的，但性能却千差万变。 <br/>
本文旨在讨论在AE中设计PAG素材的注意事项，什么样的设计会在终端有比较好的性能表现。 

### PAGViewer

PAGViewer不仅仅是PAG素材的桌面预览工具，同时还提供了性能面板用来查看PAG文件素材的基本信息，可以定性的评估PAG素材的性能。 <br/>

<div align="left">
<img src=/img/docs/opt.png width=60%/>
</div>

 关于PAGViewer性能面板的使用，可以参考 [<font color=blue>使用性能检测面板</font>](https://pag.io/docs/profiler.html)
 
### PAG素材设计基本原则
#### 1、 相比BMP预合成导出，尽可能的使用矢量导出
 BMP预合成解决的是AE动画特性众多但矢量导出目前支持的特性有限的问题，包括对一些第三方AE插件的特性的导出。其原理是在AE渲染的过程中对特定图层截屏，将一帧帧画面编码成序列帧，性能整体会比矢量导出模式差一些，并且性能消耗只跟尺寸面积有关，没有类似矢量的进一步优化空间。因此BMP预合成更适用于需要使用矢量导出不支持的AE特性的场景。<br/>
[<font color=blue>PAG的AE功能支持列表</font>](https://pag.io/docs/ae-support.html)<br>

**BMP预合成优点：**<br/>
* 	支持所有AE动画效果

**BMP预合成缺点：**<br/>
* 	PAG导出文件较大 <br/>
* 	在终端渲染的性能稍差，会使用到终端的硬件解码器资源，渲染显存较大  <br/>
* 	运行时不可编辑替换BMP预合成内的文本或图片  <br/>

#### 2、 矢量贴纸优化策略

* 	尽可能降低图层复杂度，用简化的方式实现接近的视觉效果，降低总的图层数量。可以多利用预合成方式来复用相同图层而不是直接拷贝。<br/>
* 	遮罩和轨道蒙板在绘制的过程中相对耗时，能用普通图形做出来的效果请避免使用遮罩和轨道蒙板，只有确定必须使用它们才能做出效果的情况再使用。如果必须使用遮罩和轨道蒙板，请尽量用简单图形或者简单内容图层去遮罩或蒙板住一个复杂图层，避免反过来操作。<br/>
* 	图层内容尽可能静止，多使用Transform变换位置大小旋转缩放。例如形状图层，即避免对形状内容打关键帧。

#### 3、 BMP预合成贴纸优化策略

* 	尽可能减少BMP预合成的数目，多个BMP预合成尽量合并成一个<br/>
* 	如果已经有了一个BMP预合成，与它相邻的不可编辑图层也可以考虑添加到标记了BMP的预合成中，因为已经截图了，包含再多内容都是相同的性能开销<br/>

	BMP预合成优化案例:<br/>
	(1)  相邻多个不同BMP预合成可合并
	
	![](/img/docs/opt_0.png#pic_left)
	
	(2）不同BlendMode的BMP预合成不能合并
	
	![](/img/docs/opt_1.png#pic_left)
	
	(3）不可编辑图层内容合入相近BMP预合成
	
	![](/img/docs/opt_2.png#pic_left)
	
	(4) 跨图层BMP预合成合并 <br/>
	如下图，有两个BMP预合成，分别处于不同的图层
	
	![](/img/docs/opt_3.png#pic_left)
	
	BMP预合成跨图层合并后，只有一个BMP预合成
	
	![](/img/docs/opt_4.png#pic_left)
	
	(5）BMP预合成反面使用案例 <br/>
	如下图，做了两个内容和名字都相同的预合成
	
	![](/img/docs/opt_5.png#pic_left)
	
	正确做法：一个预合成被引用两次 <br/>
	
	(6）重叠区间BMP预合成优化
	
	![](/img/docs/opt_6.png#pic_left)
	
	如上图，虽然是相同内容，但是有重叠时间段，不能做成一个预合成复用，否则重叠时间段内会不断seek解码 <br/>
	优化建议：合成一个BMP预合成 <br/>

#### 4、 UI图片素材优化 <br/>

* 	满足最低需求原则，降低图片素材分辨率 <br/>
![](/img/docs/opt_7.png#pic_left) <br/>

![](/img/docs/opt_8.png#pic_left)

  挑选使用分辨率比较大的图片素材，降低分辨率 <br/>

* 	对于BMP预合成素材一样，BMP预合成的尺寸也不宜大于所在图层的尺寸 <br/>
	<div align="left">
	<img src=/img/docs/opt_9.png width=60%/>
	</div>
	
	同时，降低BMP预合成素材的分辨率同样可以提升性能 <br/>

#### 5、 性能检测面板提醒 <br/>

当导出PAG素材预览的时候有红色警告信息，可以结合提示信息对PAG素材进行优化，如何解读参考 [<font color=blue>使用性能检测面板</font>](https://pag.io/docs/profiler.html) 和 [<font color=blue>AE导出自动检测规则</font>](https://pag.io/docs/pag-export-verify.html)


