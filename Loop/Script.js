//Print all numbers between -10 and 19.
console.log("whileloop");
var num1=-10;
while(num1<=19){
	console.log(num1);
	num1++;
}

console.log("forloop");

for(var n1=-10;n1<20;n1++){
console.log(n1);
}

//even between 10 and 40
console.log("whileloop");
var num2=10;
while(num2<=40){
	if(num2%2==0 ){
	console.log(num2);	
	}
	
	num2++;
}

console.log("forloop");
for(var n2=10;n2<=40;n2=n2+2){
	console.log(n2);
}

//odd 300 - 333
console.log("whileloop");
var num3=300;
while(num3<=333){
	if(num3%2!=0){
		console.log(num3);}
	num3++;
}


console.log("forloop");
for(var n3=300;n3<=333;n3++){
	if(n3%2!=0){
		console.log(n3);}
}
//divisible by 3 and 5  5-50
console.log("whileloop");
var num4=5;
while(num4<=50){
	if(num4%3==0 && num4%5==0){
	console.log(num4);}
	num4++;
}

console.log("forloop");

for(n4=5;n4<=50;n4++){
	if(n4%3==0 && n4%5==0){
	console.log(n4);}
}