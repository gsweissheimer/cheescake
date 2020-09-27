const express = require('express');
const routes = express.Router();

// look routes
const NewsController = require('./controllers/NewsController');
routes.get('/news', NewsController.index);
routes.get('/news/:id', NewsController.show);
routes.post('/news', NewsController.store);
routes.delete('/news/:id', NewsController.destroy);

// look routes
const UsersController = require('./controllers/UsersController');
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.store);
routes.delete('/users/:id', UsersController.destroy);


module.exports = routes;