const jwt = require('jsonwebtoken')

const newsConfig = require('../config/news')

module.exports = (req, res, next) => {

    var path = req.path.split('/').includes('news')

    if (!path) return next();

    const atualizationHeader = req.headers.atualization;

    if (!atualizationHeader) {

        req.search = true

        return next()

    } 

    const parts = atualizationHeader.split(" ")

    if (parts.length != 2) {

        req.search = true

        return next()

    } 

    const [ scheme, token ] = parts

    if (!/^Bearer$/i.test(scheme)) return res.send(false).next()

    jwt.verify(token, newsConfig.secret, (err, decoded) => {

        if (err) {

            req.search = true
    
            return next()
    
        } else {

            req.search = false
    
            return next()
    
        }

    }) 

}