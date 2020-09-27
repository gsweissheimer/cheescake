const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');
const authMiddleare = require('./src/middlewares/auth');

//iniciando o app

const app = express();

//app.use(authMiddleare);
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(morgan("dev"));

app.use(cors());

//iniciando o db
mongoose.connect('mongodb+srv://cheescake:cheescake@cluster0.belhx.mongodb.net/cheescake?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true

});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);