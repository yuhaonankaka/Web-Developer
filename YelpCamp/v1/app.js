var express = require("express");
var app = express();
var bodyParser = require("body-parser");

 var campgrounds = [
            {name:"Salmon Creek",image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144391f3c67ca4efb4_340.jpg"} ,
            {name:"Grintie Creek",image:"https://pixabay.com/get/ea34b20d29fc013ed1584d05fb1d4e97e07ee3d21cac104497f4c27ea2eeb7b9_340.jpg"},
            {name:"Mountain Creek",image:"https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f4c27ea2eeb7b9_340.jpg"}
        ]
        

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/",function(req,res){
   res.render("landing"); 
});

app.get("/campgrounds", function(req,res){
   
        res.render("campgrounds",{campgrounds:campgrounds});
});


app.post("/campgrounds", function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground={name:name,image:image};
    campgrounds.push(newCampground);
    
    //get d ata from form and add to ca3mpgrounds array
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The yelpcamp server started!!");
});