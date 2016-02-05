//the fallow command will be failled because DOM has not be reanderd
document.getElementById("title").style.color= "blue";
function setTileOfCollor(color){
	document.getElementById("title").style.color= color;
	//browser renders DOM after the js thread is finished
	//if I get here a endless loop title will never become blue
	// while(true){
	// }
}

//actually when JS thread is idle, browser renders dom
setTimeout(setTileOfCollor,0,"blue");
setTimeout(setTileOfCollor,2000,"red");

//JS engine thread is the same thread that render the Dom