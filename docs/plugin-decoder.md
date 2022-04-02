---
id: plugin-decoder
title: 注入视频软件解码器
---

### 概述
当 PAG 文件中包含视频格式的BMP预合成时会需要视频解码器，在平台支持的情况下默认会优先选择硬解码器解码。目前在移动端上，能够支持动态注入用户自研的软件解码器。

### 如何接入
#### 1、include [<font color=blue>SoftwareDecoder.h</font>](https://pag.qq.com/website/static/file/SoftwareDecoder.h),派生实现如下2个父类：

```
namespace pag {
    struct OutputFrame {
        /**
         * The YUV data, each value is a pointer to the picture planes.
         */
        uint8_t* data[3];
        /**
         * The size in bytes of each picture line.
         */
        int lineSize[3];
    };

    struct CodecHeader {
        /**
         * Codec specific data
         */
        uint8_t* data;
        /**
        * The size in bytes of each CSD.
        */
        size_t length;
    };

    enum class SoftwareDecodingResult {
        Success = 0,            //success
        TryAgainLater = -1,     //try again later.
        Error = -2,             //error
    };

    class SoftwareDecoder;

    /**
     * The factory of software decoder.
     */
    class SoftwareDecoderFactory {
    public:
        virtual ~SoftwareDecoderFactory() = default;

        /**
         * Create a software decoder
         */
        virtual std::unique_ptr<SoftwareDecoder> createSoftwareDecoder() = 0;
    };

    class SoftwareDecoder {
    public:
        virtual ~SoftwareDecoder()  = default;

        /**
         * Configure the software decoder.
         * @param headers Codec specific data. for example: csd-0、csd-1.
         * @param mime MIME type. for example: "video/avc"
         * @param width video width
         * @param height video height
         * @return Return true if configure successfully.
         */
        virtual bool onConfigure(const std::vector<CodecHeader>& headers, std::string mime,
                                 int width, int height) = 0;

        /**
         * Send a frame of bytes for decoding. The same bytes will be sent next time if it returns
         * SoftwareDecodeResult::TryAgainLater
         * @param bytes: The sample data for decoding.
         * @param length: The size of sample data
         * @param frame: The timestamp of this sample data.
         */
        virtual SoftwareDecodingResult onSendBytes(void* bytes, size_t length, int64_t frame) = 0;

        /**
         * Try to decode a new frame from the pending frames sent by onSendBytes(). More pending
         * frames will be sent by onSendBytes() if it returns SoftwareDecodeResult::TryAgainLater.
         */
        virtual SoftwareDecodingResult onDecodeFrame() = 0;
        
        /**
         * Called to notify there is no more sample bytes available.
         */
        virtual SoftwareDecodingResult onEndOfStream() = 0;
        
        /**
         * Called when seeking happens to clear all pending frames.
         */
        virtual void onFlush() = 0;

        /**
         * Return decoded data to render, the format of decoded data must be in YUV420p format.
         */
        virtual std::unique_ptr<OutputFrame> onRenderFrame() = 0;

        
    };
}

```
#### 2、实例化派生 SoftwareDecoderFactory 的子类，将该实例的指针动态注册给 libpag 模块.

##### 在 Android 端注入
将该 factory 的实例指针，强转为 long 类形参数通过 JNI 传递到 Java 层，然后调用如下方法注入指针到 libpag 模块。
```
VideoDecoder.RegisterSoftwareDecoderFactory(FFmpegDecoderFactory.GetDecoderFactory());
```
若需要测试软解解码器是否生效，可以通过如下代码来设置最大硬件码器个数为0，强制使用软解解码器：
```
VideoDecoder.SetMaxHardwareDecoderCount(0);
```

##### 在 iOS 端注入
将该 factory 的实例指针，调用如下方法注入指针到 libpag 模块。
```
[PAGVideoDecoder RegisterSoftwareDecoderFactory:(void*)&decoderFactory];
```
若需要测试软解解码器是否生效，可以通过如下代码来设置最大硬件码器个数为0，强制使用软解解码器：
```
[PAGVideoDecoder SetMaxHardwareDecoderCount:0];
```

### 注入解码器范例工程：
libpag 注入视频软件解码器的示例已经整合到我们的标准[<font color=blue>范例工程</font>](/docs/sdk.html)中。