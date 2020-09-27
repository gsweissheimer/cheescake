const mongoose = require('mongoose');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const News = mongoose.model('News');

const { json } = require('body-parser');

const newsConfig = require('../config/news')

module.exports = {

    async index(req,res) {

        const news = await News.find().limit(6);

        return res.json(news);

    },

    async store(req, res) {

        const news = await News.create(req.body);

        return res.json(news);


    },

    async show(req,res) {

        const news = await News.findById(req.params.id);

        return res.json(news);

    },

    async destroy(req,res) {

        await News.findByIdAndRemove(req.params.id);
        
        return res.send();

    }

};
