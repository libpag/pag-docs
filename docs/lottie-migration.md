---
id: lottie-migration
title: Lottie迁移指南
---

虽然PAG与Lottie在使用上基本类似，但是在迁移过程中仍然可能会遇到一些问题。本文希望能够尽可能减少相关的迁移成本，希望能够帮助设计师、运营、开发者尽快的掌握PAG。

目前，PAG迁移文档还在不断的迭代，欢迎大家随时查看。如果使用过程中有什么问题，可以直接[<font color=blue>提交issue</font>](https://github.com/libpag/libpag/issues/new?assignees=&labels=&template=bug_report.md&title=)。我们会将问题转给相应的接口人。

#### 通用迁移指南

##### 1.PAG与Lottie功能区别点

| Lottie                                                   | PAG                                                |
| -------------------------------------------------------- | -------------------------------------------------- |
| <b>KeyFrame</b>                                          |                                                    |
| 对于关键帧的时间的bezier曲线只能支持两个点               | 可以完全支持AE的关键帧                             |
| <b>Layer</b>                                             |                                                    |
| mask不支持Accum                                          | mask支持Accum                                      |
| matte支持alpha通道                                       | matte 由于性能问题，不支持alpha通道                |
| <b>ShapeLayer</b>                                        |                                                    |
| 无round图形                                              | 有round图形                                        |
| 导出插件中GradientFill与GradientStroke多语言支持有问题   | 可以正常支持属性导出                               |
| Fill中不支持blendMode与composite                         | Fill图形中支持blendMode与composite                 |
| GradientFill中不支持fillRule、blendMode与composite       | GradientFill中支持fillRule、blendMode与composite   |
| Stroke/GradientStroke不支持blendMode与composite          | Stroke/GradientStroke支持blendMode与composite      |
| GradientColor支持highlightLength和highlightAngle         | GradientColor不支持highlightLength和highlightAngle |
| PathDirection支持userSetClockwise                        | PathDirection只支持顺时针和逆时针                  |
| Repeater中RepeaterOrder只支持Below                       | RepeaterOrder支持Below和Above                      |
| <b>Composition</b>                                       |                                                    |
| 支持timeRemapping                                        | 不支持timeRemapping，只有ImageLayer支持            |
| <b>TextLayer</b>                                         |                                                    |
| 移动端不支持boxText、firstBaseLine、粗体、斜体、baseLine | 支持boxText、firstBaseLine、粗体、斜体、baseLine   |
| 不支持PathOption和MoreOptions                            | 支持PathOption和MoreOptions                        |
| 支持Animator                                             | 不支持Animator                                     |
| iOS有毛边                                                | 无毛边                                             |

##### 2.PAGViewer和AE插件安装方法

安装 [<font color=blue>文章地址</font>](/docs/install.html)

##### 3.PAGViewer快捷键说明

PAGViewer 快捷键说明 [<font color=blue>文章地址</font>](/docs/hot-key.html)



#### 设计师迁移指南

##### 1.PAG支持的AE效果

AE功能支持列表 [<font color=blue>文章地址</font>](/docs/ae-support.html)

##### 2.PAG素材在AE中的导出方法

导出：

导出PAG文件 [<font color=blue>文章地址</font>](/docs/pag-export.html)

导出错误码说明 [<font color=blue>文章地址</font>](/docs/error-code.html)

文本：

可编辑文本制作规则 [<font color=blue>文章地址</font>](/docs/editable-text.html)

插件配置：

PAG插件配置面板 [<font color=blue>文章地址</font>](/docs/plugin-config.html)

##### 3.PAGViewer使用方法

查看可编辑的图层并查看编辑后效果：

使用PAGViewer编辑预览图层 [<font color=blue>文章地址</font>](/docs/pag-edit.html)

性能检测：

使用性能监测面板 [<font color=blue>文章地址</font>](/docs/profiler.html)

导出APNG/图片序列帧：

从 PAG 导出其他图片格式 [<font color=blue>文章地址</font>](/docs/export-png.html)



#### 运营迁移指南

##### 1.素材迁移 

素材迁移说明 [<font color=blue>文章地址</font>](/docs/animation-convertor.html)

##### 2.导出APNG/图片序列帧：

从 PAG 导出其他图片格式 [<font color=blue>文章地址</font>](/docs/export-png.html)



#### 开发者迁移指南

##### 1.PAG使用Demo

libpag SDK及范例工程的获取请联系我们的邮箱：**libpag@tencent.com**

- Android端SDK为aar文件，支持armv7a
- iOS端SDK为framework文件，分为四个版本：真机版（arm64、arm64/armv7）和真机模拟器版（arm64/x64、arm64/armv7/x64）

Lottie迁移PAGSDK说明文档  [<font color=blue>文章地址</font>](/docs/SDK-migration.html)

##### 2.PAG快速接入

接入SDK [<font color=blue>文章地址</font>](/docs/sdk.html)

##### 3.SDK高级使用指南

自定义软解

注入视频软件解码器 [<font color=blue>文章地址</font>](/docs/plugin-decoder.html)

API参考

API参考 [<font color=blue>文章地址</font>](/api.html)

##### 4.PAGViewer使用方法

使用PAGViewer查看PAG文件结构 [<font color=blue>文章地址</font>](/docs/pag-file.html)
