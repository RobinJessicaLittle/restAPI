const {Router} = require("express");

const {addMovie, listMovie, updateMovies, deleteMovies} = require("./movieControllers.js")

const movieRouter = Router();

//use http verb post to add data to our movie endpoint
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovie);
movieRouter.put("/movie", updateMovies);
movieRouter.put("/movie", deleteMovies);

module.exports= movieRouter; 