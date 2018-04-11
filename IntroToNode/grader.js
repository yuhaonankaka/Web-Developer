function average(scores){
    var sum = 0.00;
    for(var i = 0;i<scores.length;i++){
        sum+=scores[i];
    }
    sum=sum/scores.length;
    var avg = Math.round(sum);
    return avg;
}


var scores = [90,98,89,100,100,86,94];

console.log(average(scores));