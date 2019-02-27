---
id: plugin-decoder
title: 视频解码器接入
---

### 概述
PAG贴纸现在支持三类导出方式，序列帧导出、矢量导出、视频帧导出。针对视频帧导出的pag文件中的视频解码，默认会选择硬解码器解码。目前在android上，能够支持动态接入用户自研的解码器。

###如何接入
####1、派生实现如下2个父类：
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
    };```

####2、实例化派生SoftwareDecoderFactory的子类，将该实例的指针动态注册给pag模块。
该factory的实例，作为long形java参数通过jni传递到Java层，然后调用如下方法注入指针到pag模块。
```    
VideoDecoder.RegisterDecoderFactory(FFmpegDecoderFactory.GetDecoderFactory());
```    
###接入解码器样例：
[pag_decoder_sample.zip](https://qzonestyle.gtimg.cn/qzone/qzact/act/external/weishi-sucai/interact/pag_decoder_sample.zip) 
