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
        type: String,
        default: "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg"
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