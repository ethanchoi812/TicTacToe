//player select x or o
var player = {
	playerX: 'X',
	playerO: 'O',
}

var clickBox = function(boxNum, display){
	document.getElementById(boxNum).innerHTML = display; 
}
