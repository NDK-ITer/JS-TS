const userController = require('../controllers/userController');

const userRoute = require('express').Router();

userRoute.get("/all", userController.getAll);
userRoute.get("/:id", userController.getById)

module.exports = userRoute;