const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController');

/*
routes.get('/', (req, res) => {
    return res.send({ message: `Hello word ${req.query.name}`});
}); 

*/

routes.post('/devs', DevController.store);


/*(req, res) =>{
    console.log(req.body);
    return res.json(req.body);
}); */


module.exports = routes;