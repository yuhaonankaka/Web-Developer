var express = require("express"),
methodOverride = require("method-override"),
expressSanitizer = require("express-sanitizer"),
app = express(),
bodyParse = require("body-parser"),
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title:String,
    image: String,
    body:String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);


// Blog.create({
//     title:"Test Blog",
//     image:"https://images.unsplash.com/photo-1426287658398-5a912ce1ed0a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2ca73a2ef25eff85533a5efb4860f36&auto=format&fit=crop&w=1000&q=60",
//     body:"Hello this is a blog post!"
// });
//RESTFUL ROUTES
//INDEX ROUTE
app.get("/", function(req,res){
    res.redirect("/blogs");
});

app.get("/blogs",function(req,res){
    Blog.find({}, function(err,blogs){
       if(err){
           console.log("ERROR!");
       } else{
           res.render("index",{blogs:blogs});
       }
    });
});

//new route
app.get("/blogs/new",function(req, res) {
    res.render("new");
});

//create route
app.post("/blogs",function(req,res){
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, function(err,newBlog){
        if(err){
            res.render("new");
        }else{
            //then,redirect to the index
            res.redirect("/blogs");
        }
    });
});
//SHOW ROUTE

app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id, function(err,foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("show",{blog:foundBlog});
       }
    });
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id,function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("edit",{blog:foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id",function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body)
   Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog){
    if(err){
        res.redirect("/blogs");
    }   else{
        res.redirect("/blogs/"+ req.params.id);
    }
   })
});


//DELETE ROUTE
app.delete("/blogs/:id", function(req,res){
   //destroy blog
   Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/blogs");
       } else{
           res.redirect("/blogs");
       }
   });
   //redirect
});



app.listen(process.env.PORT, process.env.IP, function(){
  console.log("SERVER IS RUNNING!");  
});