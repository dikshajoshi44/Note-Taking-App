var notes=[];
function display_array(){
	console.log(notes);
	var noteObj = {};
	var title=document.getElementById("formGroupExampleInput").value;
	var note=document.getElementById("formGroupExampleInput2").value;

	for (var i=0; i < notes.length; i++) {
    	if (notes[i]['title'] == title) {
      			alert('Already added');
      			return;
    }
  }

  noteObj['title'] = title;
  noteObj['note'] = note;
  console.log(noteObj);
  notes.push(noteObj);
  var htmlString = '<div class="col-4">' +
  '<div class="card" style="width: 20rem;">' +'<div class="card-body">' + 
  '<h4 class="card-title">' + title + '</h4>' + '<p class="card-text">' + note + '</p>' +
  '</div>' +'</div>' +'</div>'  ;
  $(".row").append(htmlString);
  console.log(notes);
}


/*	if(array.length==0){
		console.log();
	    var str=dofunction();
	    console.log(str);
	    console.log();
	    $(".container-fluid").append(str);

	}
	else {
		var a=document.getElementById("formGroupExampleInput").value;
			for(i=0;i<array.length;i++){
				if(array[i]['title']==a){
					window.alert("INVALID");
				}

				else {
        			var str1=dofunction();
        			console.log(str1);
        			conole.log();
        			$(".container-fluid").append(str1);
				}
			}
	}
  
}
function dofunction(){
					var x={};
					x['title']=document.getElementById("formGroupExampleInput").value;
	    			x['note']=document.getElementById("formGroupExampleInput2").value;
					var b ='<div class="row">' + 
          					'<div class="col-4">' +
                    			'<div class="card" style="width: 20rem;">' +
                    			'<div class="card-body">' +
                    				'<h4 class="card-title">' + array.push(x['title']) + 
                    				'</h4>' +
                    				'<p class="card-text">' + array.push(x['note']) + '</p>' +
                				'</div>' +
            					'</div>' +
            				'</div>' + 
        					'</div> ' 
        			return b

}*/
