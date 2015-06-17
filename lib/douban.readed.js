var cheerio = require('cheerio');
function douban_readed(html) {
  function join_data(element){
    var r  =''  
    for(var i=0;i<element.children.length;i++){
      var c =  element.children[i]
      if (c.type =='text' ){      
          r += c.data
      }    
    }
    return r.trim();  
  };
    var $ = cheerio.load(html);
    var items = [];
    $('.item-show').each(function (idx, element) {
      var d = $('div.title a',element)[0]      
      var e = $('div.date',element)[0]
      items.push({
        title:join_data(d),
        href:d.attribs.href.trim(),
        date:join_data(e)
      })      
    });
    return items
};
exports.douban_readed = douban_readed 