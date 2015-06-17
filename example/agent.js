var superagent = require('superagent');


function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}
var html = heredoc(function(){/*
    !!! 5
<html>
<head><title>403 Forbidden</title></head>
<body bgcolor="white">
<center><h1>403 Forbidden</h1></center>
<hr><center>nginx</center>
</body>
</html>
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->   
 */});


// url = 'https://cnodejs.org/'
url = "http://book.douban.com/people/1830596/collect?sort=time&filter=all&mode=list&tags_sort=count&count=100&start=0"
superagent.get(url)
  .set("User-Agent","Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36")
  .end(function (err, sres) {
    if (err) {
      return next(err);
    }
    // var r = hackhtml(sres.text)        
    console.log (sres.text.slice(0,1000) == html)
      
  });
