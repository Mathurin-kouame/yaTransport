const express = require('express');
const IndexController = require('../controllers/indexController');
const UserController = require('../controllers/userController')
const Router = express.Router();

Router.get('/',IndexController.index);
Router.post('/cerateUser', UserController.create)

module.exports = Router