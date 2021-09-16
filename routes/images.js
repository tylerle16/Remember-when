const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async function(req, res, next) {
    const images = await db.Images.findAll()
    res.send(images)
});

router.post('/', async (req, res) =>{
    
})

module.exports = router;