var movies = [
{
	title:"Lion King",
	rating: 4.5,
	hasWatched:true
},
{
	title:"The big Monster",
	rating: 4,
	hasWatched:false
},
{
	title:"KungFu Panda",
	rating: 5,
	hasWatched:true
},
{
	title:"Tatanic",
	rating: 2,
	hasWatched:false
},
{
	title:"The earth",
	rating: 5,
	hasWatched:true
}

];

for (var i = 0; i < movies.length; i++) {
	var str="";
	if(movies[i].hasWatched===true){
		str+="you have seen ";
	}
	else{
		str+="you have not seen "
	}
	str+="\""+movies[i].title+"\" "+"- "+ movies[i].rating +" stars";
	console.log(str);
}