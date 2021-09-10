var express = require('express');
var router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/register', function (req, res, next) {
  // get the username, password, and email
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).json({
      error: 'please include username, password, and email'
    })
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

  // turning the new password given into a string with hash

});

router.post('/login', async (req, res) => {
  // first check if the username exists
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((user) => {
      if (user) {
        res.status(400).json({
          error: 'username already in use'
        })
        return
      }
    })
  const user = await db.User.findOne({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    res.status(400).json({
      error: 'could not find user with that username'
    })
    return
  }
  // check password
  const success = await bcrypt.compare(req.body.password, user.password)

  if (!success) {
    res.status(401).json({
      error: 'incorrect password'
    })
    return
  }

  // login 
  req.session.user = user
  // respond with success/ error
  res.json({
    success: 'Successfully logged in'
  })
})

router.get('/logout', (req, res) => {
  req.session.user = null;
  // display message that user has successfully logged out 
  res.json({ message: 'successfully logged out'})
})

module.exports = router;
