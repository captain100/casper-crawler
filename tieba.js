var _ = require("underscore");
module.exports = function(opts) {
  var list, fetchList;
  this.echo(opts.url)
  // 遍历列表
  this.thenOpen(opts.url, function() {
    list = this.evaluate(function() {
      var aString = "a.j_th_tit";
      var rst = [];
      var nodeList = document.querySelector(aString);
      console.log(nodeList)
      // for (var i = 0; i < nodeList.length; i++) {
      //   var node = nodeList[i];
      //   var title = node.innerHTML;
      //   var url = node.getAttribute("herf");
      //   if (url.indexOf("http://") == -1) {
      //     url = location.origin + url;
      //   }
      //   console.log(1111, { title: title, url: url })
      //   rst.push({ title: title, url: url });
      // }
      return rst;
    });
  });
  //
  this.then(function() {
    this.echo(" list length: " + list.length);
    this.echo("list --> ");
  });

};
