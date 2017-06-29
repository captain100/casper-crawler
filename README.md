# casper-crawler
> 开始学习 casper 并使用 casper 实现一个爬虫 （5月24号很同时交流开始研究学习）

## 为什么要使用casper?
> 作为爬虫直接使用request是第一想法，但是现在的 web ,有很多的数据不是一个request里就全部包含的，还有很多的js 和ajax 请求来获取的，所以我们需要一个虚拟的浏览器来模拟
## phantomjs 和 casperjs 的关系
> casperjs跟phantom的关系,用一个不恰当的比喻来说,就是jquery跟js的关系casperjs优化了phantom的api操作,使之操作更加的简单。

>CasperJS是一个开源的,用JavaScript编写的,基于PhantomJS的导航脚本和测试工具 ,它简化了定义一个完成的导航操作所需的步骤,还提供了很有用的函数封装,方法,和语法糖,它可以完成下面这些常见任务:
  - 定义 & 排序浏览器导航步骤
  - 填充 & 提交表单
  - 点击 & 跟踪链接
  - 捕获网页截图 (还可以截取某一区域)
  - 在远程DOM上进行断言测试
  - 记录事件
  - 下载资源,包括二进制文件
  - 编写功能测试套件,结果保存为JUnit XML文件
  - 抓取网页内容


## 学习笔记
learn_01.js 配置开发环境
```
首先需要安装全局的phantomjs 和casperjs
1、npm install -g phantomjs 
2、npm install -g casperjs
(打开百度主页然后搜索qiushi信息) haha

知识点:
1、this.capture('1.png') 网页截图
2、等候执行
this.wait(3000, function(){

})
3、获取网页的题目
this.getTitle()
4、填写表单
fill(String selector, Object values[, Boolean submit])
this.fill('form[id="form"]', {
  "wd": 'qiushi'
}, false)
5、打印
this.echo('XXXXXXX')
6、点击按钮
this.click('input[id="submit"]')
7、给不在form中的input赋值
  this.sendKeys('input#login_user','zwq')
8、模仿鼠标点击
this.mouse.click(".btn")


```


## 参考的文档
[casperjs爬虫总结]('http://www.voidcn.com/blog/u013782762/article/p-4933611.html')

[casperjs.org]('http://casperjs.org/')

[casperjs的环境搭建及简单使用]('http://www.procedurego.com/article/171886.html')