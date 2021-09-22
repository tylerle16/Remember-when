const express = require('express');
const router = express.Router();
const db = require('../models');
const { check, validationResult, body } = require('express-validator');
const { ResultWithContext } = require('express-validator/src/chain');


router.get('/', async function (req, res, next) {
    let where = null;
    if(req.query.category){
        where = {category: req.query.category}
    }
//    find all the images in the Postgres user table
    const images = await db.Image.findAll({
        include: [{
            model: db.User,
            attributes: ['username']
        }],
        where,
        order: [['createdAt', 'DESC']]
    })
    res.send(images)
});

router.post('/',
// check for everything required to make/store an image in the database
    body("url").isURL(),
    body("description").exists(),
    body("category").exists(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // create the image
        db.Image.create({
            UserId: req.session.user.id,
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

