var express      = require("express");
var app          = express();
var bodyParser   = require("body-parser");
var mongoose     = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
});

var Campground = mongoose.model("Campground",campgroundSchema);

// Campground.create(
//     {
//         name: "Grintie Creek",
//         image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f6c57da6eab4bc_340.jpg",
//         description:"This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
        
//     }, function(err,campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("NEWLY CREATED CAMPGROUD: ");
//             console.log(campground);
//         }
//     });


app.get("/",function(req,res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req,res){
   //get all campgrounds from DB
   Campground.find({}, function(err,allcampgrounds){
       if(err){
           console.log(err);
       }else{
           res.render("index",{campgrounds:allcampgrounds});
       }
   });
        
});


app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground={name:name,image:image,description:desc};
    //create a new campground and save to DB
    Campground.create(newCampground, function(err,newlycreated){
        if(err){
            console.log(err);
        }else{
             //redirect back to campgrounds page
             res.redirect("/campgrounds");
        }
    });
    
   
   
});



app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});


//SHOW
app.get("/campgrounds/:id",function(req, res){
    Campground.findById(req.params.id,function(err, foundCampground){
        //这里捕获的是:id
        if(err){
            console.log(err);
        }else{
            res.render("show",{campground: foundCampground});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The yelpcamp server started!!");
});