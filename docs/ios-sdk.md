---
id: ios-sdk
title: libpag for iOS 接入指南
---

### 基本要求<br/>

- libpag 支持iOS8及以上； 
- libpag 需要使用Xcode8.0以上版本进行编译；
- 需要使用Objective-C++。<br>

### 安装<br>

&ensp;推荐使用以下两种安装方式：

- **通过CocoaPods安装**
 1. 先安装CocoaPods；
 2. 目前libpag提供的是tag版本号引入方式，具体使用方式如下：<br/> 
 以添加v1.3.3版本为例，在项目Podfile中添加：<br/>
pod 'libpag', :git => 'http://git.code.oa.com/MaoBing/libpag.git', :tag => 'v1.3.3'<br/>
 3. 在项目中使用CocoaPods生成的.xcworkspace运行工程;
 4. 由于libpag是基于Objective-C++的，在工程中需要进行相应的配置，配置的方式可以通过以下两种：<br/>
	* 1) 配置Build Setting -> Apple Clang - Language -> Complie Source As为Objective-C++；<br/>
	* 2) 确保工程中有.mm,如果没有可以将AppDelegate.m修改为AppDelegate.mm.
    

- **通过动态库安装**
 1. 获取libpag源码，<br/>
	* git clone http://git.code.oa.com/MaoBing/libpag.git<br/>
	* git tag<br/>
	* git checkout tag_name<br/>
 2. 将libpag.xcodeproj添加到你的工程中；
 3. 在你的项目工程中配置Build Phases->Target Dependencies中添加libpag.framework，注意这里有两个libpag.framework，要选择动态库那个，选完后可在Build Phases->Target Dependencies中确认，如果名称为libpag(libpag）正确；
 4. 由于libpag是基于Objective-C++的，在工程中需要进行相应的配置，配置的方式可以通过以下两种：<br>
	* 1) 配置Build Setting -> Apple Clang - Language -> Complie Source As为Objective-C++；<br/>
	* 2) 确保工程中有.mm,如果没有可以将AppDelegate.m修改为AppDelegate.mm.

### 注意事项<br>

&ensp;libpag内部依赖有WebP库，如果你的项目中也引用有WebP的C++库，编译后可能会存在冲突，推荐以下三种解决方式：<br/>

* 1) 使用CocoaPods安装方式, 并添加 use_frameworks!；<br>
* 2) 修改项目中WebP库的入口函数名；<br>
* 3) 单独创建一个测试工程，用CocoPods引用并编译出一个libpag.framework，拷贝出来放进项目中使用。

