//JSON for gallery
var json = JSON.parse(pictures);
var uniqueId = json.length;
var gallery = document.getElementById('gallerypics1');
loadImages();

//opening add image form
var btn = document.getElementById("add_image");
btn.addEventListener('click', function(){
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	span.onclick = function() {
    	modal.style.display = "none";
	}
	window.onclick = function(event) {
	    if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}
});

//using form inputs
var addButton = document.getElementById('add_button');
addButton.addEventListener('click', function(){
	var name = document.forms["addForm"]["name"].value;
	var url = document.forms["addForm"]["url"].value;
	var info = document.forms["addForm"]["info"].value;
	var update = document.forms["addForm"]["update"].value;

  // validate update date
	var split = update.split('/');
	var updateDate = new Date(split[2],split[1]-1,split[0]);
	var update1Timestamp = (new Date(updateDate)).getTime();
	var currentDate = new Date();
  var currentTimeStamp = currentDate.getTime();
	var regExDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
	if(name==="") {
    alert("Enter name");
    return;
  } else if(url==="") {
    alert("Enter URL");
    return;
  } else if(info==="") {
    alert("Enter information");
    return;
  } else if(update==="") {
    alert("Enter date");
    return;
  } else if(update1Timestamp>currentTimeStamp||!regExDate.test(update))	{
		alert("Invalid date");
    return;
	}
	var newImageString = "{\"id\":\""+(uniqueId)+"\",\"name\":\""+name+"\",\"src\":\""+url+"\",\"info\":\""+info+"\",\"update\":\""+update+"\"}"
	uniqueId=uniqueId+1;
  var newImageData = JSON.parse(newImageString);
	json.splice(json.length,0,newImageData);
  localStorage.setItem('pictures', JSON.stringify(json));
	gallery.innerHTML = "";
	loadImages();
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
	return;
});

function loadImages(){
	for(var it in json){
		var item = json[it];
		var img = document.createElement("img");
		img.src = item.src;
		img.alt = item.id;
    img.addEventListener('click', function(e){
			var modal1 = document.getElementById('myModal1');
			var span1 = document.getElementsByClassName("close")[1];

			//to find json
			var p=0;
			for(p=0; p<json.length; p++){
				if(json[p].id === e.target.alt){
					break;
				}
			}

			modal1.getElementsByTagName('input')[0].value = json[p].name;
			modal1.getElementsByTagName('input')[1].value = json[p].src;
			modal1.getElementsByTagName('input')[2].value = json[p].info;
			modal1.getElementsByTagName('input')[3].value = json[p].update;

			//update button
			var updateButton = document.createElement('button');
			updateButton.type = 'button';
			updateButton.id = 'update_button';
			updateButton.value = e.target.alt;
			updateButton.innerHTML = "Update Image";
			document.getElementById('edit_form').appendChild(updateButton);

      //remove button
			var removeButton = document.createElement('button');
			removeButton.type = 'button';
			removeButton.id = 'remove_button';
			removeButton.value = e.target.alt;
			removeButton.innerHTML = "Remove Image";
			document.getElementById('edit_form').appendChild(removeButton);

			updateButton.addEventListener('click', function(evnt){
				var name1 = modal1.getElementsByTagName('input')[0].value;
				var url1 = modal1.getElementsByTagName('input')[1].value;
				var info1 = modal1.getElementsByTagName('input')[2].value;
				var update1 = modal1.getElementsByTagName('input')[3].value;

				var split1 = update1.split('/');
				var updateDate1 = new Date(split1[2],split1[1]-1,split1[0]);
				var updateTimestamp1 = (new Date(updateDate1)).getTime();
				var current1 = new Date();
        var currentTimeStamp1 = current1.getTime();

				var regExDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
				
				if(name1==="") {
          alert("Enter name");
          return;
        } else if(url1==="") {
          alert("Enter URL");
          return;
        } else if(info1==="") {
          alert("Enter information");
          return;
        } else if(update1==="") {
          alert("Enter date");
          return;
        } else if(updateTimestamp1>currentTimeStamp1||!regExDate.test(update1)) {
          alert("Invalid date"); 
          return;
        }else{
					var q=0;
					for(var q=0; q<json.length; q++){
						if(json[q].id === evnt.target.value){
							break;
						}
					}
					json[q].name = modal1.getElementsByTagName('input')[0].value;
					json[q].src = modal1.getElementsByTagName('input')[1].value;
					json[q].info = modal1.getElementsByTagName('input')[2].value;
					json[q].update = modal1.getElementsByTagName('input')[3].value;
					//changes new
					gallery.innerHTML = "";
					loadImages();

  				modal1.style.display = "none"; 
  				document.getElementById('update_button').parentNode.removeChild(updateButton);
  				document.getElementById('remove_button').parentNode.removeChild(removeButton);
				}
			});			

			removeButton.addEventListener('click', function(evnt){
				for(var y=0; y<json.length; y++){
					if(json[y].id === evnt.target.value){
						json.splice(y,1);
						break;
					}
				}				
				gallery.innerHTML = "";
				loadImages();

        modal1.style.display = "none"; 
        document.getElementById('update_button').parentNode.removeChild(updateButton);
        document.getElementById('remove_button').parentNode.removeChild(removeButton);
			});

			modal1.style.display = "block";
			span1.onclick = function() {
				modal1.style.display = "none";				
				document.getElementById('update_button').parentNode.removeChild(updateButton);
				document.getElementById('remove_button').parentNode.removeChild(removeButton);
			}
			window.onclick = function(event) {
				if (event.target == modal1) {
					modal1.style.display = "none";
					document.getElementById('update_button').parentNode.removeChild(updateButton);
					document.getElementById('remove_button').parentNode.removeChild(removeButton);
				} event.stopPropagation();
			}
		});
		
		gallery.appendChild(img);
	}
}
