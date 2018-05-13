var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

var Cat = mongoose.model("Cat",catSchema);


//adding a new cat to the DB
// var george = new Cat({
//     name:"Mr.Norris",
//     age:7,
//     temperament:"Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
        
//     }
//     else{
//         console.log("We just saved a cat");
//         console.log(cat);
//     }
// });
Cat.create({
   name:"Snow",
   
   temperament:"Bla"
},function(err,cats){
    if(err){
        console.log("Error!!");
    }else{
        console.log("created!");
        console.log(cats);
    }
});
//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err,cats){
    if(err){
        console.log("error");
        console.log(err);
    }
    else{
        console.log("All the cats....");
        console.log(cats);
    }
})