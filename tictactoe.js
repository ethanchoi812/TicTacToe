//player select x or o
var player = {
	playerid: '',
	complayerid: '',
	playerclickedArr: [],
	comclickedArr:[],
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
var boxclickedArr = [];

for (var j=0; j<boxElements.length; j++){
	boxElements[j].addEventListener('click', function (){
	
	var boxclicked = this.id;
	
	//if box is not clicked on
	if(boxclickedArr.indexOf(boxclicked) === -1){
	
		//Box to get playerid on click 
		document.getElementById(this.id).innerHTML = '<p>' + player.playerid + '</p>'; 
		boxObj[boxclicked] = player.playerid;
		boxclickedArr.push(boxclicked);
		player.playerclickedArr.push(boxclicked);

		//another box to get complayerid
		var randomNum = function() {
			var num = Math.floor(Math.random()*9);
			return (boxclickedArr.indexOf('box'+ num) !== -1) ? randomNum() : num;
		}

		var randomBox = 'box' + randomNum();

		document.getElementById(randomBox).innerHTML = '<p>' + player.complayerid + '</p>';
		boxObj[randomBox] = player.complayerid;
		boxclickedArr.push(randomBox);
		player.comclickedArr.push(randomBox);
			
		console.log(boxObj, boxclickedArr, player.playerclickedArr, player.comclickedArr);
			//add delay
			//block player if 2 winning boxes get filled
		}
	}, false); 
}

//winning conditions
var winning = [
['box0', 'box1', 'box2'],
['box3', 'box4', 'box5'],
['box6', 'box7', 'box8'],
['box0', 'box3', 'box6'],
['box1', 'box4', 'box7'],
['box2', 'box5', 'box8'],
['box0', 'box4', 'box8'],
['box2', 'box4', 'box6']];

for(var k=0; k<winning.length; k++){
	for(var l=0; l<winning[k].length; l++)
	if(boxObj[winning[k][l]] === 'x'){

		} else
		if(boxObj[winning[k][l]] === 'o'){
			
		}
}

//get box number by O and X
 