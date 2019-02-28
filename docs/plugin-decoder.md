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
     * the factory of software decoder, need implement the createSoftwareDecoder function
     */
    class SoftwareDecoderFactory {
    public:
        virtual ~SoftwareDecoderFactory() {};
        /**
         * Create software decoder
         * @return: the unique pointer of software decoder
         */
        virtual std::unique_ptr<SoftwareDecoder> createSoftwareDecoder() { return nullptr; }
    };

    class SoftwareDecoder {
    public:
        SoftwareDecoder() {};

        virtual ~SoftwareDecoder() {};

        /**
         * configure the software decoder
         * @param headers: contain the configure data. for example: csd-0、csd-1.
         * @param mime: mime type. for example: video/avc
         * @param width: video width
         * @param height: video height
         * @return: true:success， false:fail
         */
        virtual bool onConfigure(const std::vector<ByteData*>& headers, std::string mime, int width, int height) { return true; };

        /**
         * send the video sample data to the software decoder
         * @param bytes: video sample data
         * @param length: the size of data
         * @param frame: sample timestamp
         * @return
         */
        virtual SoftwareDecodeResult onSendBytes(void* bytes, size_t length, int64_t frame) { return SoftwareDecodeResult::Success; };

        /**
         * decode the video sample data that you have sent(onSendBytes) to the decoder
         * @return
         */
        virtual SoftwareDecodeResult onDecodeFrame() { return SoftwareDecodeResult::Success; };

        /**
         * flush the software decoder
         */
        virtual void onFlush() {};

        /**
         * return decoded data to render.
         * @Note: the format of decoded data must be YUV format
         * @return:
         */
        virtual VFrame* onRenderFrame() { return nullptr; };

        /**
         * notify end of stream, express complete the playback of pag file
         * @return
         */
        virtual SoftwareDecodeResult onEndOfStream() { return SoftwareDecodeResult::Success; };
    };
```
#### 2、实例化派生SoftwareDecoderFactory的子类，将该实例的指针动态注册给pag模块。
该 factory 的实例指针，强转为 long 类形参数通过 jni 传递到 Java 层，然后调用如下方法注入指针到 libpag 模块。
```
    VideoDecoder.RegisterDecoderFactory(FFmpegDecoderFactory.GetDecoderFactory());
```
### 注入解码器范例工程：
ligpag 注入视频解码器范例工程的获取请联系我们的产品经理： **bosslin(林泽容), bosslin@tencent.com**
