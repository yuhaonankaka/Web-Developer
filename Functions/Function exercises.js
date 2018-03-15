function isEven(num){
if(num%2==0){
	return true;
}
else
return false;
}

console.log("2 is even: "+isEven(2));

console.log("3 is even: "+isEven(3));

function factorial(num){
if(num==0){
	return 1;
}
else{
	return num*factorial(num-1);
}
}

console.log("6! = "+factorial(6));


function KebapToSnake(str){
var n = str.replace(/-/g, "_");
return n;

}

console.log("I-love-you! -> "+KebapToSnake("I-love-you!"));