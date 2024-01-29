const songController = require("../controllers/songController");

const songRoute = require("express").Router();

songRoute.post("/add", songController.add);
// songRoute.get("/all", songController.getAll);
// songRoute.put("/update",songController.update);
// songRoute.get("/:id", songController.getById);
// songRoute.delete("/delete/:id", songController.delete);

module.exports = songRoute;