const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    
    token: {
        type: String,
        required: true
    },
    expiresAt: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('Token', TokenSchema);