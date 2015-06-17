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
  it('html2 log', function(){    
    var r = douban_readed(html)
    expect(r).to.deep.equal(
        [ { title: 'CATIA V5应用教程',
        href: 'http://book.douban.com/subject/3151806/',
        date: '2015-06-10' },
        { title: '黄花梨把玩艺术',
        href: 'http://book.douban.com/subject/26004316/',
        date: '2015-06-06' } ]
        )
  })  
})