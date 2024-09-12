// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resource')
}

const create = (resource) => {
    return db('resource').insert(resource).then()
}

module.exports = {
    getAll,
    create
}