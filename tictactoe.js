
var player = {
	userid : '',
	userclicked : [],
	userwin : '',
	comid : '',
	comclicked : [],
	comwin : '',
};

var playerone; var complayer;

//on click: userid = x/o com & userid = o/x;
//box take on userid of clicker, another box take on com id
var btn = document.getElementsByClassName('player-btn');

for (var i=0; i<btn.length; i++){
	btn[i].addEventListener('click', function(){
		
		playerone = Object.create(player);

		playerone.userid = this.id;
		playerone.userid === 'x-btn' ? playerone.comid = 'o-btn' : playerone.userid = 'x-btn';
		console.log(playerone);
	}, false);
}

var box = {
	boxNum : '',
	label : '',
	clicked : false,
};

var boxElements = document.getElementsByClassName('box');

for (var j=0; j<boxElements.length; j++){
	boxElements[j].addEventListener('click', function(){
		var boxOne= Object.create(box);
		boxOne.boxNum = this.id; 
		boxOne.label = playerone.userid;
		boxOne.clicked = true;
		document.getElementById(this.id) = boxOne.label;
	}
}
//box cannot be clicked once clicked on
//box get X or O when clicked on based on userid


var box1 = Object.create(box);

//com: randomly choose a set of 3
//com: randomly 'click' on box if box is empty
//when clickedBox === win, declare user or com winner, game reset,
//score++

var win = [012, 345, 678, 036, 147, 258, 048, 246];