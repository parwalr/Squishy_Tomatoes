var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    name:{type:String, required: true, minlength:[3, "Name must be at least 3 characters"]},
    rating: {type: Number, required: true},
    content: {type: String, required: true, minlength:[3, "Content must be at least 3 characters"]},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

var MovieSchema = new mongoose.Schema({
    title:{type:String, required: true, minlength:[3, "Title must be at least 3 characters"]},
    ratings: [RatingSchema]
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

mongoose.model("Rating", RatingSchema);
mongoose.model("Movie", MovieSchema);