var mongoose = require("mongoose");
var Movie = mongoose.model("Movie");
var Rating = mongoose.model("Rating");

module.exports = {
    index: function(req, res){
        Movie.find({}, function(err, movie){
            if(err){
                res.json(err);
            }
            else{
                res.json(movie);
            }
        })
    },

    details: function(req, res){
        Movie.findOne({_id:req.params.id},function(err,movie){
            if(err)
                res.json(err);
            else
                res.json(movie);
        })
    },

    addMovie: function(req, res){
        Movie.create(req.body, function(err, movie){{
            if(err){
                res.json({error:err});
            }
            else{
                res.json({added:true});
            }
        }
        })
    },
    addRating: function(req, res){
        console.log(`adding rating: ${req.body.content} to movie ${req.params.movieId} ...`)
                Movie.findById(req.params.movieId, function(err, movie){
                    if (!err){
                        movie.ratings.push(req.body);
                        movie.save(function(err, movie){
                            res.json(movie);
                        })
                    } else{
                        res.json({error:err});
                    }
                })
            },

    delete: function(req, res){
        Movie.remove({_id:req.params.id},function(err,movie){
            if(err)
                res.json(err);
            else
                res.json({removed:true});
        })
    }

}