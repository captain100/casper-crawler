const casper = require("casper").create();

const fs = require("fs");

phantom.outputEncoding = "utf8";

const url = "https://www.baidu.com";
casper.start(url, function() {
  this.echo("启动法式....");
  this.capture("1.png");
  var t = this.getTitle(); // 获取网页题目
  this.echo(t);
  // 填写表单
  this.fill(
    'form[id="form"]',
    {
      wd: "qiushi"
    },
    false
  );
  this.capture("2.png");
  this.echo("等候点击查询按钮");
});

casper.then(function() {
  this.click("input[id='su']");
  var that = this
  this.wait(3000, function() {
    that.echo(that.getTitle())
    that.capture("3.png")
    that.echo("查询乐成")
  });
  this.echo('11111')
});

casper.then(function(){
  this.echo('222222')
})

casper.run();
