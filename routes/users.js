var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');

/* GET users listing. */
router.post('/register',
  body("email").isEmail(),
  body("username").notEmpty(),
  body("password").isStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0
  }),
  check('confirmPassword', 'Passwords do not match').custom((value, { req }) => (value === req.body.password)),
  function (req, res, next) {
    // get the username, password, and email
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }



    // create a new user
    // check if the email exist
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (user) {
          res.status(400).json({
            error: 'username already exists'
          })
        } else {
          bcrypt.hash(req.body.password, 10)
            // turning the new password given into a string with hash
            .then((hash) => {
              // store the new password in the database
              db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash

              })
                .then((user) => {
                  res.status(201).json({
                    // respond with a success after fields have been checked for existence
                    success: 'User created'
                  })
                })
            })
        }

      })



  });

router.post('/login',
body("username")
 async (req, res) => {
  // first check if the username exists
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((user) => {
      // check user password
      bcrypt.compare(req.body.password, user.password)
        .then((success) => {
          if (success) {
            // log in user
            req.session.user = user;
            res.json({ message: 'successfully logged in' })
          } else {
            // incorrect password
            res.status(402).json({ error: 'incorrect password' })
          }
        })
    })
})

router.get('/logout', (req, res) => {
  req.session.user = null;
  // display message that user has successfully logged out 
  res.json({ message: 'successfully logged out' })
})

module.exports = router;
