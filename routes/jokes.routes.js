const jokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", jokesController.createNewJoke);
    app.get("/api/jokes", jokesController.getAllJokes);
    app.get("/api/jokes/:id", jokesController.getJokeById);
    app.put("/api/jokes/:id", jokesController.updateJoke);
    app.put("/api/jokes/:id", jokesController.deleteJoke);
};