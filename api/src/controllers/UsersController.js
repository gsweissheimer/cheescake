const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const Users = mongoose.model('Users');
const Token = mongoose.model('Token');


module.exports = {

    async index(req,res) {

        const users = await Users.find();

        return res.json(users);

    },

    async update(req,res) {

        const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        return res.json(user);

    },


    async token(req,res) {

        const tk = await Token.find({ token: req.params.token });

        return res.json(tk);

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

        const user = await Users.find({ username: req.params.username });

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

            expiresDate = new Date().getTime() / 1000 + 30*24*60*60
    
            body = {

                token: token,
                expiresAt: expiresDate,
                error: false
                
            }
    
            const status = await Token.create(body);
        
            return res.send({ user, token, status });

        } else {
        
            return res.send({ error:'Password incorrect' });

        }

    }

};
