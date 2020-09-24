---
id: animation-convertor
title: 素材迁移说明
---

迁移至PAG的过程中，项目如果已有视频渲染方案，那么必然会存在老的素材文件。针对这些遗留素材，PAG准备了一套素材转换工具，希望能够帮助接入项目统一项目中的素材文件。



#### 针对接入项目中的视频素材、图片序列帧素材和部分Lottie素材：

视频素材和图片序列帧素材可以直接转换为PAG素材文件，转换工具为PAGConvertor。[<font color=blue>PAGConvertor下载</font>](/file/PAGConvertor.zip) 

PAGConvertor是一个视频、gif、apng和图片序列帧以及Lottie的json转PAG文件的工具。

> *注：Lottie目前不支持Marker，目前是由于未确定Marker在Lottie中如何添加，如果有兴趣帮助我们解决这个问题，请联系我们。
>
> 在使用Lottie文字图层时，Lottie客户端对文本图层支持的不太好，很多功能显示效果在web和客户端显示不一致。同时，PAG的文字图层不支持AE中animator功能，如果Lottie文字图层中有animator，显示效果可能不一致。
>
> 如果转换的LottieJson中有外挂图片，不要将资源文件夹直接拖入input文件夹，否则会导出错误的pag。最好是直接使用可执行文件Convertor进行转换。

目录中，tool是已经生成的工具，包含MacOS和Linux x64两个版本。

PAGConvertor使用方法有两种：

convert.sh脚本或者直接使用PAGConvertor文件。

##### convert.sh脚本使用方法：

1.将所有需要转换的资源放入input文件夹内，目前支持视频/gif/apng/Lottie的json文件/图片序列帧。注：图片序列帧是以文件夹为单位进行转换的，其余资源不要新建文件夹。

2.打开终端，cd到当前文件夹。

3.执行`./convert.sh` 

(如果需要转换图片序列帧则添加参数 `./convert.sh <帧率>`  etc. `./convert.sh 25`)

4.转换完成后，在input文件夹内可以看到转换后的同名.pag文件

##### PAGConvertor可执行文件使用方法：

1.打开终端，cd到资源所在文件夹。

2.在终端执行`./PAGConvertor <文件名/文件夹名称> [帧率]` 

etc. `./PAGConvertor animation.mov 25`

其中帧率为可选项，当希望转换后的帧率与原素材不一致时，可以主动设置帧率。注意：可变帧率的文件格式，最好在使用时设置输出帧率。（注*：Lottie文件目前不支持帧率修改）

3.转换完成后，在文件夹内可以看到转换后的同名.pag文件



##### 转换完成后，请注意检查素材效果是否一致，如果有转换效果不正确的素材，欢迎联系**libpag@tencent.com**。同时，如果在使用PAGConvertor中有什么疑问和建议，也欢迎联系邮箱。



#### 针对转换工具目前不支持的其他素材：

目前，如果素材仍然存在AE项目，可以通过PAG的AE导出插件将素材导出成PAG文件。

AE导出插件的使用指南，可以查看[<font color=blue>使用指南-导出PAG文件</font>](/docs/pag-export.html)。



欢迎向我们提出迁移中的遇到问题，PAG项目组会竭尽全力帮助你们的项目迁移。
