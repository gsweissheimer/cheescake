const express = require('express');
const routes = express.Router();


// look routes
const NewsController = require('./controllers/NewsController');
routes.get('/news', NewsController.index);
routes.get('/news/:category', NewsController.separate);
routes.get('/userNews/:Politics/:Businees/:Tech/:Science/:Sports', NewsController.show);
routes.post('/news', NewsController.store);
routes.delete('/news/:id', NewsController.destroy);

// look routes
const UsersController = require('./controllers/UsersController');
routes.get('/users', UsersController.index);
routes.put('/users/:id', UsersController.update);
routes.get('/users/:username', UsersController.show);
routes.post('/users', UsersController.store);
routes.post('/users', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);
routes.post('/auth', UsersController.auth);


//apagar
routes.get('/token/:token', UsersController.token);


module.exports = routes;