//Dependencies for express
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const session = require('express-session');

//instantiate app
const app = express();

// Database configuration with mongoose
//var mongoDBURL = process.env.NODE_ENV === 'production' ? 'heroku:databaseurl' : 'mongodb://localhost/27017/awesamsara';
//MongoClient.connect(mongoDBURL, function(){});

// Database configuration with mongoose
const db = mongoose.createConnection('mongodb://localhost/27107/finalproject');

mongoose.Promise = global.Promise;

// show any mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
    console.log('Mongoose connection successful.');
});

// And we bring in our models/collections
const Trip = require('./models/Trip.js');
const User = require('./models/User.js');

//allow sessions and use cookie parser
const cookieParser = require('cookie-parser');
app.use(session({ secret: 'app', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));
app.use(cookieParser());

// make public a static dir
app.use(express.static('public'));
//Configure public web folder
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//Configure body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set up console logger
const logger = require('morgan');
app.use(logger('dev'));

// use morgan and bodyparser with our app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

//Configure app routes
//override with POST having ?_method=DELETE
const methodOverride = require('method-override'); //for deletes in express
app.use(methodOverride('_method'));

// Our model controllers
const application_controller = require('./controllers/application_controller');
const trips_controller = require('./controllers/trips_controller.js');
const users_controller = require('./controllers/users_controller.js');
app.use('/', application_controller);
app.use('/trips', trips_controller);
app.use('/users', users_controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler -- development error handler will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//Error handler -- production handler not leaking stacktrace to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// our module gets exported as app.
module.exports = app;

//listener in bin/www
// listen on port 3000
// app.listen(3000, function() {
//     console.log('App running on port 3000!');
// });
