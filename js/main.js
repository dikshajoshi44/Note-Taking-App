var array=[];
var x={};
function display_array(){
	if(x==0){
	    console.log(array[x]);
	    var str=dofunction();
	    $(".container-fluid").append(str);

	}
	else {
		var a=document.getElementById("formGroupExampleInput").value;
			for(i=0;i<array.length;i++){
				if(x['title']==a){
					window.alert("INVALID");
				}

				else {
        			var str1=dofunction();
        			$(".container-fluid").append(str1);
				}
			}
	}
    x++;   
}
function dofunction(){
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
