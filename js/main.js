var array=[];

function display_array(){
	var x={};
	if(array.length==0){
		console.log();
	    var str=dofunction();
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

}
