---
id: sdk-windows
title: Windows接入指南
---

# Windows接入指南 

## 准备工具

* `Visual Studio` 最低版本要求VS2015
* `PAG Source Code` 从[<font color=blue>Github</font>](https://github.com/tencent/libpag)获取最新的PAG源码<br/>
* `Node.js` PAG依赖管理的基础
* `depsync` 用于PAG的依赖管理
---

## 准备环境

1. 从[<font color=blue>Node.js</font>](https://nodejs.org/en/)官网获取并安装Node.js
2. 通过npm安装
    ```
    npm install depsync -g
    ```

---

## 运行Demo

1. 执行`libpag\win\Win32Demo.sln`启动Demo工程
2. 运行Demo。首次执行时会同步依赖和编译PAG，会比较耗时

---

## 使用PAG【Angle backend】

1. 首次运行时，在`libpag`根目录下执行
    ```
    depsync
    ```

2. 在根目录执行cmake-build生成PAG
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

4. 在使用Angle backend时，可执行程序需要链接Angle动态库
    ```
    libpag\vendor\angle\win\
    ```

## 使用PAG【QT backend】

* 待补充

