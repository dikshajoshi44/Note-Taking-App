var notes=[];
//var x=0;
function addNote(){
  console.log(notes);
  var noteObj = {};
  var title = document.getElementById('formGroupExampleInput').value;
  var note = document.getElementById('formGroupExampleInput2').value;
  for (var i=0; i < notes.length; i++) {
    if (notes[i]['title'] == title) {
      alert('Already added');
      return;
    }
  }

  noteObj['title'] = title;
  noteObj['note'] = note;
  notes.push(noteObj); 
  displayNotes();
}

function updateNote(index) {
  notes[index]['title'] = document.getElementById('formGroupExampleInput').value;
  notes[index]['note'] = document.getElementById('formGroupExampleInput2').value;
  document.getElementById('update-note').outerHTML = '';
  document.getElementById('addbutton').style.display = 'inline-block';
  displayNotes();
}

function prefillNotes(index) {
  document.getElementById('addbutton').style.display = 'none';
  document.getElementById('formGroupExampleInput').value = notes[index]['title'];
  document.getElementById('formGroupExampleInput2').value = notes[index]['note'];
  var updateButton = '<button id="update-note" onclick="updateNote('+index+');">Update Note</button>';
  $('#form_id').append(updateButton);
}

function displayNotes() {
  $(".row").html('');
  for (var i=0; i< notes.length; i++) {
      var htmlString = '<div class="col-4">' +
      '<div class="card" style="width: 20rem;">' + '<i class="fa fa-pencil-square-o" aria-hidden="true" onclick="prefillNotes('+ i + ');">'
      + '</i>' +
       '<div class="card-body">' + 
      '<h4 class="card-title">' + notes[i]['title'] + '</h4>' + '<p class="card-text">' + notes[i]['note'] + '</p>' + 
      '</div>' +'</div>' +'</div>'  ;
      $(".row").append(htmlString);
      console.log(notes);
  }
  document.getElementById('formGroupExampleInput').value="";
  document.getElementById('formGroupExampleInput2').value="";

}

/*

  noteObj['title'] = title;
  noteObj['note'] = note;
  console.log(noteObj);
  notes.push(noteObj);
  
  var htmlString = '<div class="col-4">' +
  '<div class="card" style="width: 20rem;">' + 
  '<i class="fa fa-pencil-square-o" aria-hidden="true" onclick="prefill_function('+ x + ');">'
   + '</i>'+
   '<div class="card-body">' + 
  '<h4 class="card-title">' + title + '</h4>' + '<p class="card-text">' + note + '</p>' + 
  '</div>' +'</div>' +'</div>'  ;
  $(".row").append(htmlString);
  console.log(notes);
  x++;
}

function prefill_function(b){
    console.log(notes[b]['title']);
    
    document.getElementById('formGroupExampleInput').value = notes[b]['title'];
    document.getElementById('formGroupExampleInput2').value = notes[b]['note'];
    document.getElementById('addbutton').style.display='none';
    var htmlbutton=
    '<button type="button" class="btn btn-primary" onclick="update_function('+ b +');">' +
         Update + '</i>' +
        '</button>';
    $(".row").append(htmlbutton);

}

function update_function(b){
  console.log();

}





var notes = [];
function addNote() {
  console.log(notes);
  var noteObj = {};
  var title = document.getElementById('title').value;
  var note = document.getElementById('note').value;
  for (var i=0; i < notes.length; i++) {
    if (notes[i]['title'] == title) {
      alert('Already added');
      return;
    }
  }
  
  noteObj['title'] = title;
  noteObj['note'] = note;
  notes.push(noteObj); 
  displayNotes();
}

function updateNote(index) {
  notes[index]['title'] = document.getElementById('title').value;
  notes[index]['note'] = document.getElementById('note').value;
  displayNotes();
}

function prefillNotes(index) {
  document.getElementById('add-note').style.display = 'none';
  document.getElementById('title').value = notes[index]['title'];
  document.getElementById('note').value = notes[index]['note'];
  var updateButton = '<button id="update-note" onclick="updateNote('+index+');">Update Note</button>';
  $('#form').append(updateButton);
}

function displayNotes() {
  $('#note-display').html('');
  for (var i=0; i< notes.length; i++) {
    var htmlString = '<p>' + notes[i]['title'] + ':' +
        notes[i]['note'] + '</p>' + 
        '<button onclick=prefillNotes(' + i + ')>Edit</button>';
    $('#note-display').append(htmlString);
  }
}
/*
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
