const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async function(req, res, next) {
    const images = await db.Image.findAll({
        include: [{
            model: db.User,
            attributes: ['username'],
            attributes: ['url'],
            attributes: ['description'],
            attributes: ['category']
        }]
    })
    res.send(images)
});

router.post('/', async (req, res) =>{

})