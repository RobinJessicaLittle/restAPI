const Movie = require("./movieModel");
                    //request nd response
exports.addMovie = async (req, res) => {
    try{
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie });

    }catch(error){
        console.log(error);
        res.status(500).send({error: error.message})
    }
};

exports.listMovies = async (req, res) => {
    try{
        const movies = await Movie.find({});
        res.status(200).send({movies});
    }catch (error) {
    console.log(error);
    res.status(500).send({error: error.message})
    }
};

exports.deleteMovies = async (req, res) => {
    try{
        const movies = await Movie.deleteOne(req.body);
        res.status(200).send({movies});
    }catch (error) {
    console.log(error);
    res.status(500).send({error: error.message})
    }
}

exports.updateMovies = async (req, res) => {
    try {
        const updateMovies = await Movie.updateOne(
            {title : req.body.title },
            { $set: { actors: req.body.actors} }
        )
        res.status(200).send({updateMovies})
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
  };