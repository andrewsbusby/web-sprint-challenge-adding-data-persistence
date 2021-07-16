// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model');
const { checkResourcePayload } = require('./resource_middleware.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const resource = await Resource.getAll()
        res.json(resource)
    }
    catch (err) {
        next(err)
    }
})

router.post('/', checkResourcePayload, async (req, res, next) => {
    try{
        const newResource = await Resource.create(req.body)
        res.json(newResource)
    }
    catch (err){
        next(err)
    }
})

module.exports = router;