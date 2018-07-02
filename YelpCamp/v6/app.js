var express      = require("express");
var app          = express();
var bodyParser   = require("body-parser");
var mongoose     = require("mongoose");
var passport     = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground");
var seedDB = require("./seeds");
var Comments = require("./models/comment");
var User = require("./models/user");



mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:"Once again you are found!",
    resave: false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
   res.locals.currentUser = req.user;
   next();
});
//SCHEMA SETUP


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
           res.render("campgrounds/index",{campgrounds:allcampgrounds});
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
   res.render("campgrounds/new"); 
});


//SHOW
app.get("/campgrounds/:id",function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        //这里捕获的是:id
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            res.render("campgrounds/show",{campground: foundCampground});
        }
    });
});
//==================================================================

//COMMENTS ROUTES

//====================================================================

app.get("/campgrounds/:id/comments/new",isLoggedIn,function(req,res){
    //findcampground by ID
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.render("comments/new",{campground:campground});
        }
    })

});

app.post("/campgrounds/:id/comments",isLoggedIn,function(req, res){
   Campground.findById(req.params.id,function(err, campground) {
      if(err){
          console.log(err);
          res.redirect("/campgrounds");
      } else{
          Comments.create(req.body.comment,function(err,comment){
              if(err){
                  console.log(err);
              } else{
                  campground.comments.push(comment);
                  campground.save();
                  res.redirect('/campgrounds/'+campground._id);
              }
          });
      }
   });
});


//=====================================
//AUTH ROUTEs

//show register
app.get("/register",function(req,res){
   res.render("register"); 
});

//handle sign up
app.post("/register",function(req, res) {
    var newUser = new User({username: req.body.username});
   User.register(newUser,req.body.password,function(err,user){
      if(err) {
          console.log(err);
          return res.render("register");
      }
      passport.authenticate("local")(req,res,function(){
         res.redirect("/campgrounds"); 
      });
   });
});


//show login form
app.get("/login",function(req,res){
   res.render("login"); 
});
//handel login
app.post("/login",passport.authenticate("local",
{
    successRedirect:"/campgrounds",
    failureRedirect:"/login"
}), function(req,res){
    
});
//log out route
app.get("/logout",function(req,res){
   req.logout();
   res.redirect("/campgrounds");
});



function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The yelpcamp server started!!");
});