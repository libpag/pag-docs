---
id: sdk-desktop
title: 桌面端接入指南
---
---

## 接入方式
桌面端（macOS、Windows、Linux）暂不提供统一的制品库，需要开发者根据源码自行构建，但我们会提供编译指引。PAG是跨平台的，不同平台之间的API接口具有一致性。

具体原因如下：
1. Windows端没有统一的UI框架；<br/>
2. Linux端由于服务端CPU型号或系统版本的差异，统一的制品库难以完全兼容

### API接口使用
在PAG的源码工程中，C++层基本上所有对外提供的方法都进行了测试用例的覆盖，如果想了解具体方法的使用，查看相关测试用例是一种很便捷的途径。


---
## macOS端接入

### 基本要求
+ **macOS 10.13 or later**

### 编译构建
   macOS端的项目工程位于源码根目录mac文件夹下，为Xcode工程，开发者可以自行构建

---

## Windows接入指南
### 编译工具

* `Visual Studio` 最低版本要求VS2015
* `PAG Source Code` 从[<font color=blue>Github</font>](https://github.com/tencent/libpag)获取最新的PAG源码<br/>
* `Node.js` PAG依赖管理的基础
* `depsync` 用于PAG的依赖管理


### 环境准备

1. 从[<font color=blue>Node.js</font>](https://nodejs.org/en/)官网获取并安装Node.js
2. 通过npm安装
    ```
    npm install depsync -g
    ```


### 运行Demo

1. 执行`libpag\win\Win32Demo.sln`启动Demo工程
2. 运行Demo。首次执行时会同步依赖和编译PAG，会比较耗时
3. 随Demo构建的pag.lib是release的，需要构建debug版可以参考下边的指引


### 使用PAG【Angle backend】

1. 首次运行时，在`libpag`根目录下执行
    ```
    depsync
    ```

2. 在根目录执行cmake-build生成PAG，会同时生成32位和64位的pag.lib
    ```
    node .\vendor_tools\cmake-build -p win -o .\win\paglib -v -i -DPAG_BUILD_SHARED=OFF
    ```
    * `-p` platform，在Windows下选择`win`
    * `-o` output，指定输出目录
    * `-i` incremental，增量编译开关，关闭时会清理编译目录
    * `-d` debug，debug开关
    * `-v` verbose，详细打印日志
    * `DPAG_BUILD_SHARED` 动态库编译开关
   

3. 头文件位置
    ```
    libpag\include
    ```

4. 在自己的工程内使用的时候，还需要在`工程属性->链接器->输入->附加依赖项`中添加两个系统库
    ```
    Bcrypt.lib
    ws2_32.lib
    ```

5. 在使用Angle backend时，可执行程序需要链接Angle动态库
    ```
    libpag\vendor\angle\win\
    ```

#### 使用PAG【QT backend】

* 待补充


---
## Linux端接入
### 基本要求
+ **gcc版本不低于4.9**

### 编译构建
1. 开发者参照源码根目录下的Linux_build.md完成依赖环境的安装

2. 通过根目录下的build_linux.sh完成pag库文件的构建

3. 编译生成的头文件和库文件位于vendor/pag 目录下

### Demo工程
* 预计本周内完善提供




     