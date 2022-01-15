---
id: sdk
title: 移动端接入指南
---
---
# 移动端快速接入

### SDK获取
最新SDK：[<font color=blue>SDK下载页面</font>](https://github.com/tencent/libpag/releases)<br/>

 - Android端SDK为aar文件，支持armeabi, armv7a, arm64
 - iOS端SDK为framework文件，分为四个版本：真机版（arm64、arm64/armv7）和真机模拟器版（arm64/x64、arm64/armv7/x64）


---
## Android端接入

### 基本要求
+ **支持android 4.4及以上系统**
+ **推荐使用gralde 3.0及以上版本编译**

### aar接入
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
	    //将libpag_release_3.2.5.1换成你下载的aar文件名
    	implementation(name: 'libpag_release_3.2.5.1', ext: 'aar')
	}
	
``` 

**注意：** 需要在混淆列表里面，添加libpag的keep规则：
   
```
	-keep class org.libpag.* {*;}
```
配置完以后，sync一下，再编译。<br/><br/>

### maven接入
   i. 在root工程目录下面修改build.gradle文件，增加**jcenter**的maven仓库
   
```
buildscript {

    repositories {
		jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
    }
}
	
``` 

   ii. 在app的gradle文件app/build.gradle，添加libpag的库依赖
   
```
	
	dependencies {
	    //libpag的核心库
		implementation 'com.tencent.tav:libpag:3.2.5.1'
	}
	
``` 

**注意：** 需要在混淆列表里面，添加libpag的keep规则：
   
```
	-keep class org.libpag.* {*;}
```
配置完以后，sync一下，再编译。<br/><br/>

---
## iOS端接入

### 基本要求<br/>

- **支持iOS8及以上** 
- **需要使用Xcode8.0及以上版本进行编译**

### Framework接入<br>
   1. 将libpag的framework文件放置在iOS工程项目目录下
   2. 在项目工程中，配置所使用Target的General->Embedded Binaries，添加libpag.framework
   3. 由于libpag暂时不支持Bitcode，需要配置Build Settings->Build Options->Enable Bitcode 为No

### cocoapods接入<br>
修改App目录下的Podfile文件，添加相应的libpag的引用.

```
	pod 'libpag'
```
**注意：** 最新SDK版本请参考：[<font color=blue>SDK下载页面</font>](https://github.com/tencent/libpag/releases)<br/>


# DEMO下载
**iOS DEMO下载:**

[<font color=blue>https://github.com/libpag/pag-ios.git</font>](https://github.com/libpag/pag-ios.git)

**Android DEMO下载:**

[<font color=blue>https://github.com/libpag/pag-android.git</font>](https://github.com/libpag/pag-android.git)

## 测试素材
PAG动画测试素材下载：[<font color=blue> pag_files.zip </font>](https://pagio-1251316161.file.myqcloud.com/website/static/file/pag_files.zip) 

接入使用过程若遇到问题请[<font color=blue>提交issue</font>](https://github.com/libpag/libpag/issues/new?assignees=&labels=&template=bug_report.md&title=)<br/>

---