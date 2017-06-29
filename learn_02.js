/**
 * 启动输入
 * casperjs learn_02.js --url='http://tieba.baidu.com/f?kw=%D0%A1%C2%DC%C0%F2&fr=index'  --category=dino --fetch=tieba
 */

// verbose 默认值false 不输出phantom的信息
// logLevel 显示什么级别的输出信息 debug info warning error
var casper = require("casper").create({
  verbose: false,
  logLevel: "error"
});

// 读取命令行的参数
var url = casper.cli.get("url"),
  fetch = casper.cli.get("fetch"),
  category = casper.cli.get("category");

// console.log(url);
// console.log(fetch);
// console.log(category);

var opts = {
  url: url,
  fetch: fetch,
  category : category
}

var startTime, endTime;

casper.start()

// 这句很重要,如果没有设置userAgent,则很多website会拒绝访问 
var userAgentString = 'Mozilla/5.0 (Macintosh; Intel Mac OS X)';

casper.userAgent(userAgentString)

casper.on('saveData', function(data) {
  var category = data.category,
    fetchList = data.fetchList
  var json = JSON.stringify(fetchList, undefined, 2)
  console.log(11111, json)
})
// 记录开始时间
casper.then(function() {
  return startTime =+ new Date 
})
// 使用请求fetch 文件中对应的信息
casper.then(function(){
  require('./tieba.js').call(casper, opts)
})

// 记录结束时间
casper.then(function() {
  return endTime =+ new Date 
})

casper.run()