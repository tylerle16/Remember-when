const express = require('express');
const router = express.Router();
const db = require('../models');
const { check, validationResult, body } = require('express-validator')


router.get('/', async function (req, res, next) {
//    find all the images in the Postgres user table
    const images = await db.Images.findAll()
    res.send(images)
});

router.post('/',
// check for everything required to make/store an image in the database
    body("userId").exists(),
    body("url").isURL(),
    body("description").exists(),
    body("category").exists(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // create the image
        db.Images.create({
            userId: req.body.userId,
            url: req.body.url,
            description: req.body.description,
            category: req.body.category
        })
        .then((image) =>{
            // display success message once image is created and stored
                res.status(201).json({
                success: 'Image successfully created'
            })
        })


    })


module.exports = router;

