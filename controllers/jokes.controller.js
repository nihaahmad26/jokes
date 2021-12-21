const Joke = require("../models/jokes.model");
const jokesRoutes = require("../routes/jokes.routes");

const jokeController = (req, res) => {
    res.send('controller is set up');
};

const createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
    .then((newJoke) => red.json(newJoke))
    .catch(err => res.status(400).json({ message:  err }));
};

const getAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => res.status(400).json(err));
};

const getJokeById = (req, res) => {
    const{ params } = req;
    console.log("params:", params);
    Joke.findOne({_id: params.id})
    .then((queriedJoke) => red.json(queriedJoke))
    .catch((err) => res.status(400).json(err));
};

const updateJoke = (req, res) => {
    const { params } = req;

    Joke.findOneAndUpdate({_id: params.id}, req.body, {
        new:true,
        runValidators: true,
    }).then((updatedJoke) => red.json(updatedJoke))
    .catch((err) => res.status(400).json(err));
};

const deleteJoke = (req, res) => {
    const { params } = req;
    Joke.deleteOne({_id: params.id})
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
    jokeController,
    createNewJoke,
    getAllJokes,
    getJokeById,
    updateJoke,
    deleteJoke,
};