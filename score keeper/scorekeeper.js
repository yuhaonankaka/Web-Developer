var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input[type='number']");
var resetButton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1display.classList.add("winner");
			gameOver=true;
		}
		p1display.textContent = p1Score;
	}
	
})

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score==winningScore){
			p2display.classList.add("winner");
			gameOver=true;
		}
		p2display.textContent = p2Score;
	}

	
})

resetButton.addEventListener("click",reset);

numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = numInput.value;
winningScore=Number(numInput.value);
if(winningScore<=0){
	alert("error! the winningScore must be bigger than 0!");
	winningScoreDisplay.textContent = 5;
	winningScore=5;
}
reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver=false;
};