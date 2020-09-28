const mongoose = require('mongoose');

const News = mongoose.model('News');

module.exports = {

    async index(req,res) {

        const news = await News.find().limit(6);

        return res.json(news);

    },

    async store(req, res) {

        const news = await News.create(req.body);

        return res.json(news);


    },

    async separate(req,res) {

        const news = await News.find({ category: req.params.category }).limit(6);

        return res.json(news);

    },

    async destroy(req,res) {

        //await News.findByIdAndRemove(req.params.id);
        await News.remove({ "category": req.params.id });
        
        return res.send();

    }

};
