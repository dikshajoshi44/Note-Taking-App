var x = 0;
var array=[{title:'',note:''}];
function display_array(){
	if(x==0){
	    array[x].title=document.getElementById("formGroupExampleInput").value;
	    array[x].note=document.getElementById("formGroupExampleInput2").value;
	    console.log(array[x]);

	    var str=dofucntion();

	}
	else {
		var a=document.getElementById("formGroupExampleInput").value;
			for(i=0;i<array.length;i++){
				if(array[i].title==a){
					window.alert("INVALID");
				}

				else {
        			var str1=dofunction();
				}
			}
	}
    x++;   
}
function dofunction(){
					array[x].title=document.getElementById("formGroupExampleInput").value;
	    			array[x].note=document.getElementById("formGroupExampleInput2").value;
					var b ='<div class="row">' + 
          					'<div class="col-4">' +
                    			'<div class="card" style="width: 20rem;">' +
                    			'<div class="card-body">' +
                    				'<h4 class="card-title">' + array[x].title + 
                    				'</h4>' +
                    				'<p class="card-text">' + array[x].note + '</p>' +
                				'</div>' +
            					'</div>' +
            				'</div>' + 
        					'</div> ' 
        			return b

}
