function printReverse(arr){
	for(var i=arr.length-1;i>-1;i=i-1){
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);

function isUniform(arr){
for(var i =0;i<arr.length;i++){
if(arr[i]!==arr[0]){
	return false;
}
}
return true;
}

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

console.log(isUniform([1,1,1,1]));
console.log(isUniform([1,1,3,1]));

function sumArray(arr){
var sum=0;
for(var i =0;i<arr.length;i++){
	sum=sum+arr[i];
}
return sum;

}


// function sumArray(arr){
// 	var total = 0;
// 	arr.forEach(function(element){
// 		total += element;
// 	});
// 	return total;
// }

console.log(sumArray([1,2,3,4,5]));


function max(arr){
	var max = arr[0];
for (var i = 0; i < arr.length; i++) {
	if(arr[i]>max){
		max=arr[i];
	}
}
return max;
}

console.log(max([5,7,2,4,11,4,5,8,9,3]));