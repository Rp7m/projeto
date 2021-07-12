const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController');
const LikeControler = require('./controllers/LikeControler');
const DislikeControler = require('./controllers/DislikeControler');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeControler.store);
routes.post('/devs/:devId/dislikes', DislikeControler.store);


module.exports = routes;