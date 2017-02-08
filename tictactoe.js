//player select x or o
var player = {
	playerid: '',
	complayerid: '',
}

var playerArr = [];
var comArr = [];

//used for checking later
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
};

//used for checking later
var winning = [
['box0', 'box1', 'box2'],
['box3', 'box4', 'box5'],
['box6', 'box7', 'box8'],
['box0', 'box3', 'box6'],
['box1', 'box4', 'box7'],
['box2', 'box5', 'box8'],
['box0', 'box4', 'box8'],
['box2', 'box4', 'box6']
];

var alertme = document.getElementById('alert');

//target buttons by class name
var btnElements = document.getElementsByClassName('player-btn');


for (var i=0; i<btnElements.length; i++){
	btnElements[i].addEventListener('click', function(){
		
		//assign 'x' or 'o' to player on click and the other to com
		player.playerid = this.id;
		player.playerid === 'x' ? player.complayerid = 'o' : player.complayerid = 'x';
		
		//change btn color
		document.getElementById(this.id).style.backgroundColor = '#0097fc' ? '#00ffc3' : '#0097fc';

		//clears alert msg
		alertme.innerHTML = '';
	
	}, true);
}

//target boxes by class name
var boxElements = document.getElementsByClassName('box');

function markBox(thebox, marker, arr){
	//Box to get playerid on click 
	document.getElementById(thebox).innerHTML = '<p class="mark">' + marker + '</p>'; 

	//for checking later
	boxObj[thebox] = marker;
	arr.push(thebox);
}

//add click events to boxes
for (var j=0; j<boxElements.length; j++){
	boxElements[j].addEventListener('click', function (){
	
	//require player to select 'x' or 'o'
	if (player.playerid === ''){
		
		alertme.innerHTML = '<p>Please select X or O</p>';
	
	} else {

	var boxclicked = this.id;

	//box is marked X or O if box is not marked before
	if(boxObj[boxclicked] === '') {
	
		//Box to get playerid on click 
		markBox(this.id, player.playerid, playerArr);
	}
			//check if player won yet?
			winning.forEach(function(a){
				if(boxObj[a[0]] === player.playerid && boxObj[a[1]] === player.playerid && boxObj[a[2]] === player.playerid){

					//tells player of win
					setTimeout(function(){
						alertme.innerHTML = '<p>You Win!</p>';
					}, 100);

					
					setTimeout(function(){
						location.reload();
					}, 700);
				}
			});
		
		//to choose one between 2 if player creates 2 2-in-a-row
		//add delay
		setTimeout(function(){

			//randomly pick a box to get complayerid
			var randomBoxNum = function() {
				var boxNum = Math.floor(Math.random()*9);
				return boxObj['box' + boxNum] !== '' ? randomBoxNum() : boxNum;
			}

			var randomBox = 'box' + randomBoxNum();

			//finds the arr where player is winning, i.e., has 2 boxes marked
			function findWinningArr(arrForCheck){
	
			var ans	= winning.find(function(arr){
				var res = [];
				for(var i=0; i<arr.length; i++){
					if(boxObj[arr[i]] === arrForCheck){
						res.push(arr[i]);
						}
					}

				for(var j=0; j<arr.length; j++){
					if(res.length === 2 && boxObj[arr[j]] === '') {
						return arr;
						}
					}
				});
				return ans;
			}
		
		//if player made 1 move - com marks random box
		if(playerArr.length < 2){

			markBox(randomBox, player.complayerid, comArr);

		} else if(playerArr.length >= 2){

			var arrX = findWinningArr(player.playerid); //human is winning (2 in a row)
			var arrY = findWinningArr(player.complayerid); //com is winning (2 in a row)

			if(!arrX && !arrY){
				
			/*	var y2	= winning.find(function(arr){

							for(var i=0; i<arr.length; i++){
								if(boxObj[arr[i]] === player.complayerid){
									for(var j=0; j<arr.length; j++){
										if(boxObj[arr[j]] === '') {
										console.log(arr[j]);
									}
								}
							}
						}		
					});*/
								
				markBox(randomBox, player.complayerid, comArr);
					
				//to block human if winning
			} else if(arrX && !arrY){
					
				for(var k=0; k<arrX.length; k++){
					if(boxObj[arrX[k]] === ''){

					markBox(arrX[k], player.complayerid, comArr);
					}
				}

				//if human player does not have 2 in a row and computer has 2 in a row
				//computer to go for 3 in a row
			} else if(!arrX && arrY){
						
				for(var k=0; k<arrY.length; k++){
					if(boxObj[arrY[k]] === ''){

					markBox(arrY[k], player.complayerid, comArr);
					}
				}
					//if human & computer player both have 2 in a row
					//computer to go for 3 in a row
			} else if(arrX && arrY){
					
				for(var k=0; k<arrY.length; k++){
					if(boxObj[arrY[k]] === ''){

					markBox(arrY[k], player.complayerid, comArr);
					}
				}
			}
		}

			//test if computer wins
		winning.forEach(function(a){
			if(boxObj[a[0]] === player.complayerid && boxObj[a[1]] === player.complayerid && boxObj[a[2]] === player.complayerid){
					
				setTimeout(function(){
					alertme.innerHTML = '<p>Computer Wins!</p>';
					}, 100);

				setTimeout(function(){
					location.reload();
					}, 700);
				}
			});
			
		},800);


		//alert draw and reset
		var total = eval(playerArr.length + comArr.length);
		
		if(total > 8){
			
			alertme.innerHTML = "It's a draw!";
	
			setTimeout(function(){
				location.reload();
					}, 700);
				}
			}	
	}, false); 
}




			
