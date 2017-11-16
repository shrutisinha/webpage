var data= document.getElementsByClassName("MsoPlainText");
var rows = 'DEPARTMENT' + ";" + 'CODE' + ";" + 'DESCRIPTION' + ";" + 'RATE' + "\n";
var department, code, desc, rate;

for(var i = 6; i < data.length; i++) {
  var str = data[i].textContent;

  if(str.indexOf('ACCOMMODATION') >= 0) {
    break;
  }

  if(str.indexOf('DEPARTMENT OF') >= 0) {
    var start = str.indexOf('DEPARTMENT OF') + 14;
    dept = str.substr(start).replace(/[\s]{2,}/g, " ").toString().trim();
  }
  else if(str.replace(/\s/g, '').length > 0 && str.indexOf('=') < 0 &&
    str.indexOf('--') < 0 && str.indexOf('CODE') < 0) {

    code = str.substr(0,8).replace(/[\s]{2,}/g, " ").toString().trim();
    desc = str.substr(9,45).replace(/[\s]{2,}/g, " ").toString().trim();
    rate = str.substr(55,10).replace(/[\s]{2,}/g, " ").toString().trim();
    rows += "\"" + dept + "\"" + ";" + "\"" + code + "\"" + ";" + "\"" + desc + "\"" + ";" +
      "\"" + rate + "\"" + "\n";
  }
}

var link = document.createElement('a');
link.download = 'retrieved_csv.csv';
link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(rows);
document.body.appendChild(link);
link.click();
