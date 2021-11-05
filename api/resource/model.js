const db = require('../../data/dbConfig.js');

module.exports = {
    findAll,
    add,
}
async function findAll() {
    const rows = await db('resources')
        .select(
            'resource_id',
            'resource_name',
            'resource_description',
        )
    return rows
}

async function findById(id) {
    const rows = await db('resources')
        .select(
            'resource_id',
            'resource_name',
            'resource_description',
        )
        .where('resource_id', id).first()
    return rows
}

async function add(resource) {
    return await db('resources').insert(resource)
        .then(async id => {
            return await findById(id)
        })
}
