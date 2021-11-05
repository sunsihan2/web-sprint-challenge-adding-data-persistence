const db = require('../../data/dbConfig.js');

module.exports = {
    findAll,
    add,
}
async function findAll() {
    const rows = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select(
    't.task_id',
    't.task_notes',
    't.task_description',
    't.task_completed',
    'p.project_description',
    'p.project_name'
    )
    return rows
}

async function findById(id) {
    const rows = await db('tasks')
    .select(
    'task_id',
    'task_description',
    'task_notes',
    'task_completed'
    )
    .where('task_id', id).first()
    return rows
}

async function add(task) {
    return await db('tasks').insert(task)
    .then(id => {
    return findById(id)
    })
    
}
