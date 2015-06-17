var superagent = require('superagent');
/*
        */

// var superagent = require('superagent');
function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}
var html = heredoc(function(){/*
    !!! 5
    <ul class="list-view">
      
        <li id="list3151806" class="item">
            <div class="item-show">
                <div class="title">
                    <a href="http://book.douban.com/subject/3151806/">
                        CATIA V5应用教程
                    </a>
                </div>
                <div class="date">
                        <span class="rating3-t"></span>&nbsp;&nbsp;
                2015-06-10
                </div>
            </div>
            <div id="grid3151806" class="hide">
                <div class="grid-date">
                        <span class="intro">韩书葵等 / 清华大学出版社 / 2008-6 / 38.00元</span><br />
                </div>
            </div>
        </li>
        <li id="list26004316" class="item">
            <div class="item-show">
                <div class="title">
                    <a href="http://book.douban.com/subject/26004316/">
                        黄花梨把玩艺术
                    </a>
                </div>
                <div class="date">
                2015-06-06
                </div>
            </div>
            <div id="grid26004316" class="hide">
                <div class="grid-date">
                        <span class="intro">何悦 / 现代出版社 / 2013-8 / 37.00</span><br />
                </div>
            </div>
        </li>
</ul>
 */});

var douban_readed = require("../lib/douban.readed.js").douban_readed

var expect = require("chai").expect
describe('cheerio', function(){
    // it('html2 log', function(){    
    //     var r = douban_readed(html)
    //     expect(r).to.deep.equal(
    //         [ { title: 'CATIA V5应用教程',
    //         href: 'http://book.douban.com/subject/3151806/',
    //         date: '2015-06-10' },
    //         { title: '黄花梨把玩艺术',
    //         href: 'http://book.douban.com/subject/26004316/',
    //         date: '2015-06-06' } ]
    //         )
    // })  
    it('html2 fetch', function(){ 
        // (function a()
        // {
        //     var superagent = require('superagent');
        //     url = "http://book.douban.com/people/1830596/collect?sort=time&filter=all&mode=list&tags_sort=count&count=100&start=0"
        //     console.log("url");
        //     console.log(url);
        //     superagent.get(url)
        //       .end(function (err, sres) {
        //         if (err) {
        //           console.log(err); 
        //           return next(err);
        //         }
        //         console.log(s.res.text.slice(0,200))
        //         // savehtml(sres.text)            
        //       });
        //     function savehtml(text){
        //       var fs = require('fs');
        //       fs.writeFile("../data/1.html",text, function(err) {
        //           if(err) {
        //               return console.log(err);
        //           }
        //           console.log("The file was saved!");
        //       }); 
        //     }
        // })
        (function(){
            var superagent = require('superagent');
            var url = 'https://cnodejs.org/'            
            url = "www.163.com"
            superagent.get(url)
              .end(function (err, sres) {
                if (err) {
                  return next(err);
                }
                console.log("sres.text")
                // savehtml(sres.text)            
              });
            // function savehtml(text){
            //   var fs = require('fs');
            //   fs.writeFile("1.html",text, function(err) {
            //       if(err) {
            //           return console.log(err);
            //       }
            //       console.log("The file was saved!");
            //   }); 
            // }

            }) ()
    })
  it('html2 fetch2', function(){ 
        var superagent = require('superagent');
            var url = 'https://cnodejs.org/'            
            url = "www.163.com"
            superagent.get(url)
              .end(function (err, sres) {
                if (err) {
                  return next(err);
                }
                console.log("sres.text")
                // savehtml(sres.text)            
              });
    })
  it('ex', function(){ 
    expect(1)  .to.equal(1)
  })
  it('ex2', function(){ 
        var superagent = require('superagent');
        var url = 'https://cnodejs.org/'            
        superagent.get(url)
          .end(function (err, sres) {
            if (err) {
              return next(err);
            }
            expect(1)  .to.equal(1)
            // console.log("sres.text")
            // savehtml(sres.text)            
          });
    
  })
  // 异步代码测试，已经记得要有callback ！
  // 对比ex4，没有done的callback，它就完全不等异步代码执行完毕。坑。
  // it('ex3', function(){ 
  //       url = 'https://cnodejs.org/'
  //       // url = "http://book.douban.com/people/1830596/collect?sort=time&filter=all&mode=list&tags_sort=count&count=100&start=0"
  //       superagent.get(url)
  //         .end(function (err, sres) {
  //           if (err) {
  //             return next(err);
  //           }
  //           // var r = hackhtml(sres.text)        
  //           console.log(sres.text.slice(0,200))
  //           // done()
  //         });
  // })
  it('ex4', function(done){ 
        url = 'https://cnodejs.org/'
        url = "http://book.douban.com/people/1830596/collect?sort=time&filter=all&mode=list&tags_sort=count&count=100&start=0"
        superagent.get(url)
          .end(function (err, sres) {
            if (err) {
              return next(err);
            }
            // var r = hackhtml(sres.text)        
            console.log(sres.text.slice(0,200))
            done()
          });
  })
})


