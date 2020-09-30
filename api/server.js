const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const requireDir = require('require-dir');

require('dotenv/config')

//iniciando o app

const app = express();

//app.use(authMiddleare);
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(morgan("dev"));

app.use(cors());

//iniciando o db
mongoose.connect(process.env.REACT_APP_MONGO_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true

});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.REACT_APP__PORT);