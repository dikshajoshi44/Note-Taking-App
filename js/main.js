var x = 0;
var array=[{title:'',note:''}];
function display_array(){
	if(x==0){
	    array[x].title=document.getElementById("formGroupExampleInput").value;
	    array[x].note=document.getElementById("formGroupExampleInput2").value;
	    console.log(array[x]);


	}
	else {
		var a=document.getElementById("formGroupExampleInput").value;
			for(i=0;i<array.length;i++){
				if(array[i].title==a){
					window.alert("INVALID");
				}
			}
	}

    x++;

    
}
