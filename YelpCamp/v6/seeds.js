var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "That player turned out to be Josh Allen, perhaps the most polarizing of the top four quarterbacks who were available in the draft and probably the one who will be least ready to play among that group at the start of the season. Allen has to work on several facets of his game, not the least of which is improving his accuracy, and the expectation is that unless Allen shocks everyone, free agent signee AJ McCarron will be Buffalo's starter, at least early in the season."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "That player turned out to be Josh Allen, perhaps the most polarizing of the top four quarterbacks who were available in the draft and probably the one who will be least ready to play among that group at the start of the season. Allen has to work on several facets of his game, not the least of which is improving his accuracy, and the expectation is that unless Allen shocks everyone, free agent signee AJ McCarron will be Buffalo's starter, at least early in the season."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "That player turned out to be Josh Allen, perhaps the most polarizing of the top four quarterbacks who were available in the draft and probably the one who will be least ready to play among that group at the start of the season. Allen has to work on several facets of his game, not the least of which is improving his accuracy, and the expectation is that unless Allen shocks everyone, free agent signee AJ McCarron will be Buffalo's starter, at least early in the season."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;