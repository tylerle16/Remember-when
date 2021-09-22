const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const db = require('./models');
const expressValidator = require('express-validator')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({db: db.sequelize})
store.sync()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const imagesRouter = require('./routes/images');
const router = require('./routes/index');


var app = express();




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'secret', // used to sign the cookie 
    resave: false,// update session even w/ no changes made
    saveUninitialized: true,
    cookie: {
      secure: false, // doesn't accept https req's unless this is true
      maxAge: 2592000,//time in seconds 
    },
    store,
  })
);


app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/images', imagesRouter);

app.get('*', (req, res)=> {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

