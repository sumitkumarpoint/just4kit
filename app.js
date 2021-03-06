var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about-us');
var contactRouter = require('./routes/contact-us');
var mailer=require('./mailer/sendmail')
// var controller=require('./controller/application')
var db=require('./model/db')
var app = express();

app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about-us', aboutRouter);
app.use('/contact-us', contactRouter);
// app.controller;

app.post('/send',function (req, res) {
    req.flash('success', 'Mail successfully sent!');
    var data={
        'sender': 'sumitkumarpoint@gmail.com',
        'email': req.body.email,
        'subject': 'contact us by '+req.body.name+'('+req.body.email+')',
        'text': req.body.text,
        'name': req.body.name
    }
    const kitty = new db.ContactUs({ email: data.email,name: data.name,text: data.text });
    kitty.save().then(() => console.log('Document successfully created!'));

    mailer(data,res);
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
