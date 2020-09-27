const mongoose = require('mongoose');
const fieldEncryption = require('mongoose-field-encryption');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const Users = mongoose.model('Users');


module.exports = {

    async index(req,res) {

        const users = await Users.find();

        return res.json(users);

    },

    async store(req, res) {

        const { username } = req.body;

        const _try = await Users.find({ username: username });

        if (Object.keys(_try).length != 0) {

            return res.json({ error: 'User Already Exists!' })
    
        } else {

            const user = await Users.create(req.body);
    
            return res.json(user);

        }

    },

    async show(req,res) {

        const user = await Users.findById(req.params.id);

        return res.json(user);

    },

    async destroy(req,res) {

        await Users.findByIdAndRemove(req.params.id);
        
        return res.send();

    },

    async auth(req,res) {

        const { password, username } = req.body;
        
        user = await Users.findOne({ username }).select('+password');

        if (!user) {
        
            return res.json({ error:'User not found' });

        } else if (password === user.password) {

            user.password = undefined

            const token = jwt.sign({ id: user._id }, authConfig.secret, {

                expiresIn: 86400

            })
        
            return res.send({ user, token });

        } else {
        
            return res.send({ error:'Password incorrect' });

        }

    }

};
