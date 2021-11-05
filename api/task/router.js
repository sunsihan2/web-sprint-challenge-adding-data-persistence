const express = require('express');
const Task = require('./model.js');

const router = express.Router()
router.get('/', (req, res, next) => {
    Task.findAll(req.query)
        .then(tasks => {
            console.log(tasks)
            res.json(tasks.map(task => {
                return { ...task, task_completed: !!task.task_completed }

            }))
            console.log(tasks)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const task = req.body

    Task.add(task)
        .then(task => {
            console.log(task)
            res.status(201).json({ ...task, task_completed: !!task.task_completed })
        })
        .catch(next)
});
module.exports = router
