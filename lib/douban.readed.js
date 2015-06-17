var cheerio = require('cheerio');
function douban_readed(html) {
    function get_text(element){
      var r  =''  
      for(var i=0;i<element.children.length;i++){
        var c =  element.children[i]
        if (c.type =='text' ){      
            r += c.data
        }    
      }
      return r.trim();  
    };
    function get_href(element){
      return element.attribs.href.trim()
    }
    var $ = cheerio.load(html);
    var items = [];
    $('.item-show').each(function (idx, element) {
      var d = $('div.title a',element)[0]      
      var e = $('div.date',element)[0]
      items.push({
        title:get_text(d),
        href:get_href(d),
        date:get_text(e)
      })      
    });
    return items
};
exports.douban_readed = douban_readed 