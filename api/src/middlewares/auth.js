const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

module.exports = (req, res, next) => {

    var path = req.path.split('/')

    path = path[path.length -1]

    if (path === 'auth') return next();

    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).send({ error: "No token previded!" })

    const parts = authHeader.split(" ")

    if (parts.length != 2) return res.status(401).send({ error: "Token error!" })

    const [ scheme,token ] = parts

    if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: "Wrong token format!" })

    jwt.verify(token, authConfig.secret, (err, decoded) => {

        if (err) return res.status(401).send({ error: "Token invalid!" })

        req.userId = decoded.id

        return next()

    }) 

}