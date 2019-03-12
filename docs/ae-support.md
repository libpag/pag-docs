---
id: ae-support
title: AE功能支持列表
---

序列帧方式导出可以支持所有的AE特性，但是文件体积较大，矢量方式导出文件极小，但仅支持部分AE特性，矢量导出方式通常用于UI动画等对于文件大小和性能敏感，以及需要贴纸内容可编辑的场合。序列帧导出方式也可以被矢量导出方式嵌套，作为它的一个图层来实现AE特效和可编辑的结合。部分未继续列举子属性的功能点，说明下一级子属性列表已全部支持。


# 序列帧导出

### 位图序列帧

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
	[蒙版不支持半透明的擦除，只支持纯色的擦除]

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
		大小 (Size)


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


# 计划中将要支持的特性
 
### 变换 (Transforms)
	3D 属性 (3D Properties)

### 形状图层 (Shapes)
	中继器 (Repeater)

### 文本图层 (Texts)
	路径选项 (Path Options)
	更多选项 (More Options)
	动画制作工具 (Animator)
	
### 图层效果 (Layer Effects)
	浅色调 (Tint)
	填充 (Fill)
	描边 (Stroke)
	三色调 (Tritone)
	投影 (Drop Shadow)
	径向擦除 (Radial Wipe)
	置换 (Displacement Map)
