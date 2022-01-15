---
id: animation-convertor
title: 素材迁移说明
---
---

> 如果素材仍然存在 AE 项目，建议通过 PAG 的 AE 导出插件将素材导出成 PAG 文件。
> 
> AE 导出插件的使用指南，可以查看[<font color=blue>使用指南-导出 PAG 文件</font>](/docs/pag-export.html)。

迁移至 PAG 的过程中，如果项目已有视频渲染方案，那么必然会存在老的素材文件。针对这些遗留素材，PAG 准备了一套素材转换工具，希望能够帮助接入项目统一项目中的素材文件。

### 针对接入项目中的视频素材、图片序列帧素材和部分 Lottie 素材：

视频素材和图片序列帧素材可以直接转换为 PAG 素材文件，转换工具为 PAGConvertor。
[<font color=blue>PAGConvertor下载</font>](https://pagio-1251316161.file.myqcloud.com/website/static/file/PAGConvertor.zip) 

#### PAGConvertor 是一个可以把视频、gif、apng、图片序列帧和 Lottie 的 json 转成 PAG 文件的工具。

> *注：Lottie 目前不支持 Marker，目前是由于未确定 Marker 在 Lottie 中如何添加，如果有兴趣帮助我们解决这个问题，请联系我们。
>
> 在使用 Lottie 文字图层时，Lottie 客户端对文本图层支持的不太好，很多功能显示效果在 web 和客户端显示不一致。同时，PAG 的文字图层不支持 AE 中 animator 功能，如果 Lottie 文字图层中有 animator，显示效果可能不一致。
>
> 如果转换的 LottieJson 中有外挂图片，不要将资源文件夹直接拖入 input 文件夹，否则会导出错误的 pag。最好是直接使用可执行文件 Convertor 进行转换。

目录中，tool 是已经生成的工具，包含 MacOS 和 Linux x64 两个版本。

PAGConvertor 使用方法有两种：convert.sh 脚本或者直接使用 PAGConvertor 文件。

---

### convert.sh 脚本使用方法：

1.将所有需要转换的资源放入 input 文件夹内，目前支持视频/gif/apng/Lottie 的 json 文件/图片序列帧。注：图片序列帧是以文件夹为单位进行转换的，其余资源不要新建文件夹。

2.打开终端，cd 到当前文件夹。

3.执行 `./convert.sh` 

(如果需要转换图片序列帧则添加参数 `./convert.sh <帧率>`  etc. `./convert.sh 25`)

4.转换完成后，在 input 文件夹内可以看到转换后的同名.pag 文件

---

### PAGConvertor 可执行文件使用方法：

1.打开终端，cd 到资源所在文件夹。

2.在终端执行`./PAGConvertor <文件名/文件夹名称> [帧率]` 

etc. `./PAGConvertor animation.mov 25`

其中帧率为可选项，当希望转换后的帧率与原素材不一致时，可以主动设置帧率。注意：可变帧率的文件格式，最好在使用时设置输出帧率。（注*：Lottie 文件目前不支持帧率修改）

3.转换完成后，在文件夹内可以看到转换后的同名.pag 文件
### 转换完成后，请注意检查素材效果是否一致，如果有转换效果不正确的素材，或者在使用 PAGConvertor 中有什么疑问和建议，请[<font color=blue>提交issue</font>](https://github.com/libpag/libpag/issues/new?assignees=&labels=&template=bug_report.md&title=)。


---

欢迎向我们提出迁移中的遇到问题，PAG 项目组会竭尽全力帮助你们的项目迁移。

---
