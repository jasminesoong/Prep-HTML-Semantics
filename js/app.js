window.onload = function(){


var titleArray = ["Super Hero", "Mysterious Hedgehog", "Lover of Donuts", "Mega Man"];

for (i = 0; i<titleArray.length; i++){
	var randomString = titleArray[Math.floor(Math.random()*titleArray.length)];
	console.log(randomString);
	}

};