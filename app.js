
//choose x or o
var player=''; var complayer='';
var playerX = document.getElementById('x-btn');
var playerO = document.getElementById('o-btn');

var playerElements = document.getElementsByClassName('player-btn');

for (var i=0; i<playerElements.length; i++){
	playerElements[i].addEventListener('click', function(){
		player = this.id;
		player === 'x-btn' ? complayer = 'o-btn' : complayer = 'x-btn';
	}, false);
}

var playerObj = {
	'x-btn': 'X',
	'o-btn': 'O',
	'':''
}
//click to display
var boxElements = document.getElementsByClassName('box');
var clickedBoxes = [];
//random box is marked
function randomNum() {
  var a;
  var min = Math.ceil(9);
  var max = Math.floor(1);
  
  a = Math.floor(Math.random() * (max - min)) + min;
  
  return a;

  }

for (var j=0; j<boxElements.length; j++){
	boxElements[j].addEventListener('click', function(){
		this.innerHTML = '<p>' + playerObj[player] + '</p>';
		clickedBoxes.push(this.id);
		console.log(clickedBoxes);
		var randomBox = 'box' + randomNum();
		//computer clicks random box that is not clicked
		//set delay
		if(clickedBoxes.indexOf(randomBox) === -1){
			document.getElementById(randomBox).innerHTML = '<p>' + playerObj[complayer] + '</p>';
			clickedBoxes.push(randomBox);
		} 
	}, false);
}



//3 in a row to win
// winning conditions [012, 345, 678, 036, 147, 258, 048, 246]
//reset on win
