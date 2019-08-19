---
id: sdk
title: 接入SDK
---

# 快速接入

libpag 目前支持Android和iOS平台，web的支持目前处于开发过程中，接入采用SDK的方式<br/>

### SDK及范例工程获取
libpag SDK及范例工程的获取请联系我们的邮箱：**libpag@tencent.com**

 - Android端SDK为aar文件，支持armv7a
 - iOS端SDK为framework文件，分为四个版本：真机版（arm64、arm64/armv7）和真机模拟器版（arm64/x64、arm64/armv7/x64）


## Android端接入

### 基本要求
+ **支持android 4.4及以上系统**
+ **推荐使用gralde 3.0及以上版本编译**

### 接入
   1. 将libpag的aar文件放置在android工程项目的libs目录下
   2. 添加添加aar库依赖<br/>
   在app的gradle文件app/build.gradle，添加libpag的库依赖
   
```
	android {
	    repositories {
        flatDir {
            dirs 'libs'
        }
    }
	
	dependencies {
	    //libpag的核心库
	    //将libpag_release_2.1.1.23换成你下载的aar文件名
    	implementation(name: 'libpag_release_2.1.1.23', ext: 'aar')
	}
	
```
	  
配置完以后，sync一下，再编译。<br/><br/>



## iOS端接入

### 基本要求<br/>

- **支持iOS8及以上** 
- **需要使用Xcode8.0及以上版本进行编译**

### 接入<br>
   1. 将libpag的framework文件放置在iOS工程项目目录下
   2. 在项目工程中，配置所使用Target的General->Embedded Binaries，添加libpag.framework
   3. 由于libpag暂时不支持Bitcode，需要配置Build Settings->Build Options->Enable Bitcode 为No

## 其他接入方式
内网用户android已经支持maven引入，ios支持cocoapods引入，详细的引用方法可以联系：**libpag@tencent.com**

