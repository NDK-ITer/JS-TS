const songController = require("../controllers/songController");

const songRoute = require("express").Router();

songRoute.post("/add", songController.add);
songRoute.get("/all", songController.getAll);

module.exports = songRoute;