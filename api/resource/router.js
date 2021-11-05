const express = require('express');

const Resource = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.findAll(req.query)
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const resource = req.body

    Resource.add(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
});
module.exports = router
