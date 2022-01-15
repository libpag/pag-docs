---
id: pag-file-optimization
title: PAG文件体积优化
---

文件体积的优化有多重环节来保证。除了在导出过程中程序会自动化的体积优化外，设计师还可以手动操作达到更深度的优化压缩，进一步减小导出PAG文件体积。
1. 启用此功能需在“首选项->PAG Config...->单独调节图像尺寸”中选择开启（默认关闭)并点击确认。
![](https://pagio-1251316161.file.myqcloud.com/website/static/img/docs/FileOptimization/pagconfig.png)
2. 如果导出的素材中包含图片或BMP预合成，AE导出插件将在导出过程中弹出“素材压缩面板“，以供设计师在素材效果与素材体积之间做出最优选择。
![](https://pagio-1251316161.file.myqcloud.com/website/static/img/docs/FileOptimization/panel.png)
#### 图片压缩: 
1. 调整大小：用户可以选择 1, 1/2, 1/3,1/4, 1/8 进行调整
#### BMP预合成压缩:
1. 调整分辨率：用户可以选择 1, 1/2, 1/3, 1/4 进行调整
2. 调整帧率: 用户可以选择 1, 3/4, 1/2 进行调整
#### 重新导出：
用户设置完压缩选项可点击“重新导出素”按钮重新导出素材，重新导出后“素材压缩设置”面板会再次打开。此时“导出体积”与“导出分辨率”将显示用户设置生效的参数，进而有针对的优化素材体积。
#### 确认：
用户确认素材压缩参数，点击“确认”按钮后，素材将按照已生效的导出参数进行压缩导出。
#### 调整策略: 
为了提高素材优化效率，请参考以下几点进行优化：
1. 优先考虑压缩“导出体积”中数值较大的素材
2. 其次考虑画面内容比较平滑的素材(比如：光效)，而画面比较锐利的素材则更容易造成肉眼可见的质量损失。
3. 当参数调整完压缩导出之后，建议与未压缩的导出文件进行对比，尽量在文件体积与文件质量上寻求最佳平衡。如下图所示：同样一个素材调整前1.1M；调整后310KB，并且素材质量视觉上没有明显的损失。
![](https://pagio-1251316161.file.myqcloud.com/website/static/img/docs/FileOptimization/compare.png)
#### 备注：
如下图，在“AE导出素材尺寸压缩设置”功能中。当用户导出素材中只包含图片素材时，将只弹出“图片压缩设置”面板；当只包含BMP预合成素材时将只弹出“BMP预合成压缩设置"面板。只有同时包含图片与BMP预合成素材时才会弹出“素材压缩面板“。
![](https://pagio-1251316161.file.myqcloud.com/website/static/img/docs/FileOptimization/onlyImage.png)
当只包含图片素材时
![](https://pagio-1251316161.file.myqcloud.com/website/static/img/docs/FileOptimization/onlySequence.png)
当只包含BMP预合成素材时
![](https://pagio-1251316161.file.myqcloud.com/website/static/img/docs/FileOptimization/imageAndSequence.png)
当同时包含图片素材与BMP预合成素材



