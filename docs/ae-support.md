---
id: ae-support
title: AE功能支持列表
---

PAG同时支持矢量直接导出和「BMP预合成」导出两种方式。设计师在指定的预合成名字上加 _bmp 后可以将该预合成标记为「BMP预合成」，标记为BMP的预合成在导出时会自动进行截图方式导出。BMP预合成导出方式可以支持所有的AE特性，但是文件体积较大，也无法运行时编辑内容。矢量直接导出的方式文件极小，但仅支持部分AE特性。矢量导出方式通常用于UI动画等对于文件大小和性能敏感，以及需要贴纸内容可编辑的场合。BMP预合成导出方式也可以被矢量导出方式嵌套，作为它的一个图层来实现AE特效和可编辑的结合。具体可以参考：[<font color=blue>导出PAG文件</font>](/docs/pag-export.html)


# BMP预合成导出

BMP预合成导出模式可以支持所有的AE特效，设计师只需要关注视觉效果本身即可，但是会有一定的性能开销，并且无法做到运行时对动画内容修改编辑。BMP预合成目前支持**视频序列帧**和**位图序列帧**两种导出的存储格式，位图存储格式做了简单的帧间压缩，每帧只记录改变的区域。平均可以比传统的PNG序列帧文件小 50% 。而视频存储格式帧基于 H264 帧间压缩并补充了透明通道，相同动画文件大小非常有优势。相比位图存储格式只有 10 % ~ 25% 左右的文件大小。下表是一些常用的动画效果在两种导出模式下的文件大小对比：

![导出格式文件大小对比](/img/docs/sequence.png)

目前位图存储格式主要使用在部分不支持视频存储格式的场景，比如 web 端。视频存储格式是BMP预合成的默认导出格式，除了文件大小的优势，渲染时还可以开启硬件加速解码，能显著降低设备发热量。

# 矢量导出

### 所有关键帧动画属性都支持

### 图层类型 (Layer Types)
	虚拟对象 (Null Object)
	实色图层 (Solid Layer)
	文字图层 (Text Layer)
	形状图层 (Shape Layer)
	预合成图层 (PreCompose Layer)
	图片图层 (Image Layer)

### 变换 (Transforms)
	定位点 (Anchor Point)
	位置 (Position)
	位置分离XY轴 (Position Separated X/Y )
	缩放 (Scale)
	旋转 (Rotation)
	透明度 (Opactiy) [注：不支持整体透明度(可能产生叠影)，只支持分散到各个图层的透明度]

### 混合模式 (Blend Modes)
	正常 (Normal)
	变暗 (Darken)
	相乘 (Multiply)
	颜色加深 (ColorBurn)
	相加（Add）
	变亮 (Lighten)
	屏幕 (Screen)
	颜色减淡 (ColorDodge)
	叠加 (Overlay)
	柔光 (SoftLight)
	强光 (HardLight)
	差值 (Difference)
	排除 (Exclusion)
	色相 (Hue)
	饱和度 (Saturation)
	颜色 (Color)
	发光度 (Luminosity)


### 轨道蒙板 (Track Mattes)
	无 (None)
	Alpha 蒙板 (Alpha)
	反向 Alpha 蒙板 (Alpha Inverted)
	[均可支持半透明擦除]

### 遮罩 (Masks)
	遮罩形状 (Mask Path)
	遮罩扩展 (Mask Expansion)
	遮罩模式 (Mask Modes)
		无 (None)
		相加 (Add)
		相减 (Subtract)
		交集 (Intersect)
		差值 (Difference)
	[注：不支持mask的alpha属性]

### 图层样式 (Layer Styles)
	投影 (Drop Shadow)
   		颜色 (Color)
		不透明度 (Opacity)
		角度 (Angle)
		距离 (Distance)
		扩展（Spread）
		大小 (Size)

### 特效 (Effect)
    运动模糊 (Motion Blur)
    高斯模糊（Gaussian Blur）
    凹凸效果 (Bulge)
    辉光效果 (Glow)
    色阶控制 (Levels Individual Controls)
    边角定位 (Corner Pin)
    动态拼贴 (Motion Tile)
    置换效果（Displacement Map）(暂要求将置换图层修改为预合成图层并改合成名为"_bmp"后缀)
    
（效果预览：[<font color=blue>当前支持的AE内置特效</font>](/docs/ae-effect.html)）

### 其他图层属性 (Others Layer Properties)
	图层父级 (Layer Parenting)

### 形状图层 (Shapes)
	组 (Group)
	矩形 (Rectangle)
	椭圆 (Ellipse)
	多边星形 (Polystar)
	路径 (Path)
	填充 (Fill)
	描边 (Stroke)
	合并路径 (Merge Paths)
	中继器 (Repeater)
	修剪路径 (Trim Paths)
	圆角 (Round Corners)
	渐变填充 (Gradient Fill)
	渐变描边 (Gradient Stroke)

### 文本图层 (Texts)
	源文本 (SourceText)
		基线偏移 (Baseline Shift)
		点文本 (Point Text)
		带框文本 (Box Text)
		仿粗体 (Faux Bold)
		仿斜体 (Faux Italic)
		文本颜色 (Fill Color)
		字体名称 (Font Family)
		字体样式 (Font Style)
		字号 (Font Size)
		描边颜色 (Stroke Color)
		描边宽度 (Stroke Width)
		交换图层和描边 (Stroke Over Fill)
		行距 (Leading)
		字间距 (Tracking)
		文本对齐 (Paragraph Justification)
			左对齐 (Left)
			居中对齐 (Center)
			右对齐 (Right)
			最后一行左对齐 (Full Justify Last Line Left)
			最后一行居中对齐 (Full Justify Last Line Center)
			最后一行右对齐 (Full Justify Last Line Right)
			两端对齐 (Full Justify Last Line Full)
		横排/竖排（Horizontal/Vertical）

	动画制作工具（Animate）
		范围选择器
			起始（Start）
			结束（End）
			偏移（Offset）
			（高级属性正在开发支持中：模式、数量、形状、随机排序，等等）
		属性
			字间距（Tracking）
				字符间距类型（Track Type）
				字符间距大小（Tracking Amount）
			位置（Position）
			（其它属性正在开发支持中：旋转、缩放、透明度，等等）


# 计划中将要支持的特性
 
### 变换 (Transforms)
	3D 属性 (3D Properties)


### 文本图层 (Texts)
	路径选项 (Path Options)
	更多选项 (More Options)
	动画制作工具 (Animate)
	
### 图层效果 (Layer Effects)
	浅色调 (Tint)
	填充 (Fill)
	描边 (Stroke)
	三色调 (Tritone)
	径向擦除 (Radial Wipe)
