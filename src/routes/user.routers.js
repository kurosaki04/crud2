const { getAll, create, getOne, remove, update} = require('../controllers/userCrud.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/user")
		.get(getAll) 
        .post(create)
 
 userRouter.route("/user/:id")
        .get(getOne) 
        .delete(remove) 
        .put(update) 

 
module.exports = userRouter;