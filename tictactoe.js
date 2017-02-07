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

//assign 'x' or 'o' to player on click and the other to com
for (var i=0; i<btnElements.length; i++){
	btnElements[i].addEventListener('click', function(){
		
		player.playerid = this.id;
		player.playerid === 'x' ? player.complayerid = 'o' : player.complayerid = 'x';
		
		//clears alert msg
		alertme.innerHTML = '';
	
	}, false);
}

//target boxes by class name
var boxElements = document.getElementsByClassName('box');

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
		document.getElementById(this.id).innerHTML = '<p class="mark">' + player.playerid + '</p>'; 

		//for checking later
		boxObj[boxclicked] = player.playerid;
		playerArr.push(boxclicked);
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


		//if empty - random box
		//if 1 in a row, continue row 
		//to get 3 in a row
		//to block player if 2 in a row
		//to choose one between 2 if player creates 2 2-in-a-row
		//add delay
		setTimeout(function(){

			var counter;
			//randomly pick a box to get complayerid
			var randomBoxNum = function() {
				var boxNum = Math.floor(Math.random()*9);
				return boxObj['box' + boxNum] !== '' ? randomBoxNum() : boxNum;
			}

			//finds the arr where player has 2 boxes marked

			var randomBox = 'box' + randomBoxNum();

		if(playerArr.length < 2){
			document.getElementById(randomBox).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
			
			boxObj[randomBox] = player.complayerid;
			comArr.push(randomBox);

			} else if(playerArr.length > 1){
		
			var x = winning.find(function(arr){
					var res1 = [];
					//var res2 = [];
					for(var i=0; i<arr.length; i++){
						if(boxObj[arr[i]] === player.playerid){
							res1.push(arr[i]);
							}
						}

						for(var j=0; j<arr.length; j++){
						if(res1.length === 2 && boxObj[arr[j]] === '') {
							return arr;
						}
					}
				});

				var y = winning.find(function(arr){
					var res1 = [];
					//var res2 = [];
					for(var i=0; i<arr.length; i++){
						if(boxObj[arr[i]] === player.complayerid){
							res1.push(arr[i]);
							}
						}

						for(var j=0; j<arr.length; j++){
						if(res1.length === 2 && boxObj[arr[j]] === '') {
							return arr;
						}
					}
				});

				if(!x && !y){
						document.getElementById(randomBox).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
						boxObj[randomBox] = player.complayerid;
									comArr.push(randomBox);
						
					} else if(x && !y){
					
					for(var k=0; k<x.length; k++){
						if(boxObj[x[k]] === ''){

						document.getElementById(x[k]).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
							
									boxObj[x[k]] = player.complayerid;
									comArr.push(x[k]);
								}
							}
						} else if(!x && y){
							for(var k=0; k<y.length; k++){
								if(boxObj[y[k]] === ''){

								document.getElementById(y[k]).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
							
									boxObj[y[k]] = player.complayerid;
									comArr.push(y[k]);
									}
								}
							} else if(x && y){
										for(var k=0; k<y.length; k++){
											if(boxObj[y[k]] === ''){

											document.getElementById(y[k]).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
										
												boxObj[y[k]] = player.complayerid;
												comArr.push(y[k]);

									}
								}
							}
						}
				/*
					for(var j=0; j<arr.length; j++){
						if(res1.length === 2 && boxObj[arr[j]] === '') {
							document.getElementById(arr[j]).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
					
							boxObj[arr[j]] = player.complayerid;
							comArr.push(arr[j]);

							} else if(res2.length === 2 && boxObj[arr[j]] === '') {
								document.getElementById(arr[j]).innerHTML = '<p class="mark">' + player.complayerid + '</p>';
				
								boxObj[arr[j]] = player.complayerid;
								comArr.push(arr[j]);
								} 
							}
						
					}*/
			

			//test if computer wins
			winning.forEach(function(a){
				if(boxObj[a[0]] === player.complayerid && boxObj[a[1]] === player.complayerid && boxObj[a[2]] === player.complayerid){
					
					setTimeout(function(){
						alertme.innerHTML = '<p>Computer Wins!</p>';
					}, 100);

					setTimeout(function(){
						location.reload();
					}, 900);

					}
				});
			
			},700);

		var total = eval(playerArr.length + comArr.length);
		
		if(total > 8){
			
			alertme.innerHTML = "It's a draw!";
	
			setTimeout(function(){
				location.reload();
					}, 900);
				}
			}
		
	}, false); 
	
}




			
