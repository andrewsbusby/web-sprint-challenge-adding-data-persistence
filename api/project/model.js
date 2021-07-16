// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const create = (resource) => {
    return db('projects').insert(resource).then()
}

module.exports = {
    getAll,
    create
}