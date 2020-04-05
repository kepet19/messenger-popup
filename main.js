document.addEventListener("click", function(e){
	//console.log(e.target.id);
	switch (e.target.id) {
		case "facebook":
			windowOpenFacebook(400, 400);
			break;
		case "facebook6x6":
			windowOpenFacebook(600, 600);
			break;
		case "custom":
			windowOpenFacebook(document.getElementById("xheight").value, document.getElementById("xheight").value);
			break;
		default: 
			console.log("default");
			break;
	}	
});

function windowOpenFacebook( x, y){
	console.log("Opened facebook with: ", x, y);
	window.open("https://messenger.com", "_blank", toolbar="yes",scrollbars="yes",resizable="yes",top=500,left=500,width=x,height=y);
}
