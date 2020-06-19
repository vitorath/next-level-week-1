const express = require('express');
const multer = require('multer');
const uploadsConfig = require('./config/upload');

const PostConstroller = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.get('/posts', PostConstroller.index);
routes.post('/posts', upload.single('image') , PostConstroller.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;