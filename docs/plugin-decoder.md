---
id: plugin-decoder
title: 注入视频解码器
---

### 概述
PAG贴纸现在支持三类导出方式，序列帧导出、矢量导出、视频帧导出。针对视频帧导出的pag文件中的视频解码，默认会选择硬解码器解码。目前在android上，能够支持动态接入用户自研的解码器。

### 如何接入
#### 1、派生实现如下2个父类：
```
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
        virtual bool onConfigure(const std::vector<ByteData*>& headers, std::string mime,
                                 int width, int height) = 0;

        /**
         * Send a frame of bytes for decoding. The same bytes will be sent next time if it returns
         * SoftwareDecodeResult::TryAgainLater
         * @param bytes: The sample data for decoding.
         * @param length: The size of sample data
         * @param frame: The timestamp of this sample data.
         */
        virtual SoftwareDecodeResult onSendBytes(void* bytes, size_t length, int64_t frame) = 0;

        /**
         * Try to decode a new frame from the pending frames sent by onSendBytes(). More pending
         * frames will be sent by onSendBytes() if it returns SoftwareDecodeResult::TryAgainLater.
         */
        virtual SoftwareDecodeResult onDecodeFrame() = 0;

        /**
         * Called when seeking happens to clear all pending frames.
         */
        virtual void onFlush() = 0;

        /**
         * Return decoded data to render, the format of decoded data must be in YUV420p format.
         */
        virtual OutputFrame* onRenderFrame() = 0;

        /**
         * Called to notify there is no more sample bytes available.
         */
        virtual SoftwareDecodeResult onEndOfStream() = 0;
    };
```
#### 2、实例化派生SoftwareDecoderFactory的子类，将该实例的指针动态注册给pag模块。
该 factory 的实例指针，强转为 long 类形参数通过 jni 传递到 Java 层，然后调用如下方法注入指针到 libpag 模块。
```
    VideoDecoder.RegisterDecoderFactory(FFmpegDecoderFactory.GetDecoderFactory());
```
### 注入解码器范例工程：
ligpag 注入视频解码器范例工程的获取请联系我们的产品经理： **bosslin(林泽容), bosslin@tencent.com**