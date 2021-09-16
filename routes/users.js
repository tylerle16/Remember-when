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
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }



    // check if the email already exist
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
          // turning the new password given into a string with hash
          bcrypt.hash(req.body.password, 10)
          // store the new password in the database
          .then((hash) => {
              // create a new user in the database
              db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash

              })
                .then((user) => {
                  res.status(201).json({
                    // respond with a success after the user has been successfully created and stored into the database
                    success: 'User created'
                  })
                })
            })
        }

      })



  });

router.post('/login',

body("username").exists(),
body("password").exists(),

 async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // first check if the username exists
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((user) => {
      if(!user){
        res.status(404).json({ error: 'User does not exist' })
        return
      }
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
