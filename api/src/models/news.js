const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author_img: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('News', NewsSchema);