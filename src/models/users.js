const mongoose = require('mongoose');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    politics: {
        type: Boolean,
        required: true
    },
    business: {
        type: Boolean,
        required: true
    },
    tech: {
        type: Boolean,
        required: true
    },
    science: {
        type: Boolean,
        required: true
    },
    sports: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

UsersSchema.plugin(mongooseFieldEncryption, { fields: ["password"], secret: "Ch33sc4k3" });

mongoose.model('Users', UsersSchema);