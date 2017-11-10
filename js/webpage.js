// var json = [
//   {"id":"0", "src":"images/a.jpg", "name":"serenity", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"1", "src":"images/b.jpg", "name":"fox", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"2", "src":"images/c.jpg", "name":"track", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"3", "src":"images/d.jpg", "name":"cars", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"4", "src":"images/e.jpg", "name":"rose", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"5", "src":"images/f.jpg", "name":"track", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"6", "src":"images/g.jpg", "name":"tiger", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"7", "src":"images/h.jpg", "name":"saplings", "info":"copied from web", "update":"10/11/2017"},
//   {"id":"8", "src":"images/i.jpg", "name":"fried_icecream", "info":"my adventures", "update":"10/11/2017"},
//   {"id":"9", "src":"images/j.jpg", "name":"snow", "info":"my adventures", "update":"10/11/2017"},
//   {"id":"10", "src":"images/k.jpg", "name":"sandwich", "info":"my adventures", "update":"10/11/2017"},
//   {"id":"11", "src":"images/l.jpg", "name":"sand", "info":"my adventures", "update":"10/11/2017"},
// ];

var json = JSON.parse(pictures);

loadGallery();
function loadGallery(){
  for(var it in json){
    var item = json[it];
    var div = document.createElement('div');
    div.innerHTML = '<img src=' + item.src + ' />';
    document.getElementById('gallerypics').appendChild(div);
  }
}
