const db = require('../../data/dbConfig')

const getAll = () => {
    return db('task')
}

const create = (resource) => {
    return db('task').insert(resource).then()
}

module.exports = {
    getAll,
    create
}
