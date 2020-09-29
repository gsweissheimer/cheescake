const mongoose = require('mongoose');

const News = mongoose.model('News');

module.exports = {

    async index(req,res) {

        const news = await News.find().limit(6);

        return res.json(news);

    },

    async show(req,res) {

        var categories = []

        var keys = Object.keys(req.params)

        var values = Object.values(req.params)

        values.map( (e,i) => {
            
            if(e === 'true') {

                categories.push(keys[i])
                
            }

        } )

        const news = await News.find({ category: categories }).limit(6);

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
