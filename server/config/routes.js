var movies = require("../controllers/movies.js");
var path = require("path");

module.exports = function(app){
    app.get("/all", movies.index)

    app.get("/one/:id", movies.details)

    app.post("/movies", movies.addMovie)

    app.post("/review/:movieId/", (req, res) => {
        movies.addRating(req, res);
    });

    app.delete('/movies/:id', movies.delete)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}