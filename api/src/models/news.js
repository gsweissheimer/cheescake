const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({

    url: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    urlToImage: {
        type: String
    },
    category: {
        type: String
    },
    author_img: {
        type: String
    },
    author: {
        type: String
    },
    publishedAt: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('News', NewsSchema);