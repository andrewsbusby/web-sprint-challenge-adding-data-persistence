// const Resource = require('./model')

const checkResourcePayload = (req, res, next) => {
    if(!req.body.resource_name) return next({
        status: 400, message: 'resource name missing'
    })

}

module.exports = {
    checkResourcePayload
}