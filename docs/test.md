---
id: test
title: 自动化测试
---

自动化测试暂时只支持iOS版本


## 测试原理
校验pag测试用例文件运行时的每一帧MD5值，和项目中预置的校验文件进行对比，如果所有帧的MD5值相同，则测试通过。

更具体的，测试工程启动后会遍历测试用例文件目录下的所有pag文件，逐个逐帧进行校验，定位问题的力度可以精确到pag文件的每一帧。


## 测试用例文件路径
测试用例文件目录：**libpag/ios/Resources/Test/PAG** <br/>
测试用例为pag文件格式

检验文件目录：**libpag/ios/Resources/Test/JSON** <br/>
校验文件为json文件格式，数据内容为pag文件每一帧数据的MD5值组成的数组


## 使用方法
 1. 切换项目Target至PAGViewerTest
 2. 运行该项目，当出现以下界面时，测试通过


![](/img/success.jpg)
 
   &nbsp;&nbsp;&nbsp;&nbsp;出现以下界面时，测试失败


![](/img/fail.jpg)

## 错误信息
 1. pag file not found under Resources/Test/PAG !
 
    测试用例文件目录下无测试文件
 
 2.  1 json file not found under Resources/Test/JSON !<br/>
     data.json
     
     **Resources/Test/JSON** 目录下缺少一个校验文件，为data.json
 3. FileName:data.pag<br/>
    file frames does not match！
    
    测试用例文件data.pag与校验文件的帧数不一致！
 4. FileName:data.pag<br/>
    currentFrame:112, progress:0.9412 <br/>
    测试用例文件data.pag第112帧、进度0.9412处与检验文件不一致


## 用例增加或更新
 1. 测试用例增加<br/>
    在**libpag/ios/Resources/Test/PAG** 目录下增加测试用例文件，运行该项目，在log信息中，根据测试用例文件名查找到对应的MD5数组，在**libpag/ios/Resources/Test/JSON**目录下增加对应的json校验文件，pag文件名和json文件名需要保持一致，区分大小写，将MD5数组放到json文件中作为标准值。
 
 2. 测试用例更新<br/>
    在**libpag/ios/Resources/Test/PAG** 目录下更新测试用例文件，运行该项目，在log信息中，根据测试用例文件名查找到对应的MD5数组，作为标准值更新至相应json文件即可。
    
    
   
