var numSquares = 6;
var colors = [];
var pickedColor;
var suqares = document.querySelectorAll(".square");
var ColorDisplay = document.querySelector("#colorDisplay");
var resultDisplay = document.querySelector("#resultDisplay");
var h1Display = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	for (var i = 0; i < modeButtons.length; i++) {
 modeButtons[i].addEventListener("click",function(){
 	modeButtons[0].classList.remove("selected");
 	modeButtons[1].classList.remove("selected");
 	this.classList.add("selected");
 	this.textContent ==="Easy"? numSquares=3 : numSquares=6;
 	reset();
 });
}

ColorDisplay.textContent = pickedColor;
for (var i = 0; i < suqares.length; i++) {

	suqares[i].addEventListener("click",function(){

		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor===pickedColor){
					resultDisplay.textContent="Correct!";
					changeColors(pickedColor);
					h1Display.style.backgroundColor=pickedColor;
					resetButton.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			resultDisplay.textContent="Try Again!";
		}
	})
}

reset();
}


function reset(){
	colors=createColors(numSquares);
	pickedColor = pickColor();
	ColorDisplay.textContent = pickedColor;
	for (var i = 0; i < suqares.length; i++) {
		if(colors[i]){
			suqares[i].style.display = "block";
			suqares[i].style.backgroundColor=colors[i];
		}
		else{
			suqares[i].style.display = "none";
		}
	};
	h1Display.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
	resultDisplay.textContent="";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares=3;
// 	colors = createColors(numSquares);
// 	pickedColor = pickColor();
// 	ColorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < suqares.length; i++) {
// 		if(colors[i]){
// 			suqares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 			suqares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;
// 	colors = createColors(numSquares);
// 	pickedColor = pickColor();
// 	ColorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < suqares.length; i++) {
		
// 		suqares[i].style.backgroundColor=colors[i];
// 		suqares[i].style.display = "block";
		
// 	}
// });

resetButton.addEventListener("click",function(){
	reset();
});


function changeColors(color){
	for (var i = 0; i < suqares.length; i++) {
		suqares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function createColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomRGB());
	}

	return arr;
}

function randomRGB(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	var rgb = "rgb("+r+", "+g+", "+b+")";
	return rgb;
}