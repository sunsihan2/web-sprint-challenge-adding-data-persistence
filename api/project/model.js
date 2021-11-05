const db = require('../../data/dbConfig.js');

module.exports = {
    findAll,
    add,
}

async function findAll() {
    const rows = await db('projects')
        .select(
            'project_id',
            'project_name',
            'project_description',
            'project_completed'
        )
    return rows
}

async function findById(id) {
    const rows = await db('projects')
        .select(
            'project_id',
            'project_name',
            'project_description',
            'project_completed'
        )
        .where('project_id', id).first()
    return rows
}

async function add(project) {
    return await db('projects').insert(project)
        .then(async id => {
            return findById(id)
        })

}
