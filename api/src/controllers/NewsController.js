const mongoose = require('mongoose');

const News = mongoose.model('News');


module.exports = {

    async index(req,res) {

        const news = await News.find();

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
