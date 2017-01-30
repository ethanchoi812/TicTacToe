
//choose x or o
var player='';
var playerX = document.getElementById('x-btn');
var playerO = document.getElementById('o-btn');

var playerElements = document.getElementsByClassName('player-btn');

for (var i=0; i<playerElements.length; i++){
	playerElements[i].addEventListener('click', function(){
		player = this.id;
	}, false);
}

var playerObj = {
	'x-btn': 'X',
	'o-btn': 'O',
	'':''
}
//click to display
var boxElements = document.getElementsByClassName('box');

for (var j=0; j<boxElements.length; j++){
	boxElements[j].addEventListener('click', function(){
		this.innerHTML = '<p>' + playerObj[player] + '</p>';
	}, false);
}

//take turns with com

//3 in a row to win
//rest on win
