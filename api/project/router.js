const express = require('express');
const Projects = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const project = await Projects.getAll()
        res.json(project)
    }
    catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newProject = await Projects.create(req.body)
        res.json(newProject)
    }
    catch(err){
        next(err)
    }
})


module.exports = router