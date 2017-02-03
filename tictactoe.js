//player select x or o
var player = {
	playerid: '',
	complayerid: ''
}

var boxObj = {
	box0:'',
	box1:'',
	box2:'',
	box3:'',
	box4:'',
	box5:'',
	box6:'',
	box7:'',
	box8:'',
}

//assign x or o to player and the other to com
var btnElements = document.getElementsByClassName('player-btn');

for (var i=0; i<btnElements.length; i++){
	btnElements[i].addEventListener('click', function(){
		player.playerid = this.id;
		player.playerid === 'x' ? player.complayerid = 'o' : player.complayerid = 'x';
		console.log(player.playerid, player.complayerid);
	}, false);

}

var boxElements = document.getElementsByClassName('box');

for (var j=0; j<boxElements.length; j++){
	boxElements[j].addEventListener('click', function (){
	var boxclicked = this.id;
	
	//if box is not clicked on
	if(boxObj[boxclicked] === ''){
	
		//Box to get playerid on click 
		document.getElementById(this.id).innerHTML = '<p>' + player.playerid + '</p>'; 
		
		boxObj[boxclicked] = player.playerid;
		console.log(boxObj);

		//another box to get complayerid

	}

	}, false); 
}



//if row or diagonal is empty or filled with complayerid
//box obj with id



