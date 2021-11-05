const express = require('express');

const Project = require('./model.js');

const router = express.Router()
router.get('/', (req, res, next) => {
    Project.findAll(req.query)
        .then(projects => {
            console.log(projects)
            res.json(projects.map(project => {
                return { ...project, project_completed: !!project.project_completed }

            }))
            console.log(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const project = req.body

    Project.add(project)
        .then(project => {
            console.log(project)
            res.status(201).json({ ...project, project_completed: !!project.project_completed })
        })
        .catch(next)
});

module.exports = router
