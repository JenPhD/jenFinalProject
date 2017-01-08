const Trip = require('../models/Trip');
const User = require('../models/User');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//this is the trips_controller.js file
// =================================================================
// Routes
// =================================================================

//Redirecting user on click until saving info from API
//Get, renders volunteer opportunities
router.get('/volunteer', function(req,res) {
    res.render('trips/volunteer', {
        //keep logged_in
        logged_in: req.session.logged_in,
        // the username to the session
        name: req.session.name,
        // and the user's email.
        email: req.session.email
    });
});

//Get, renders flights
router.get('/flights', function(req,res) {
    res.render('trips/flights', {
        //keep logged_in
        logged_in: req.session.logged_in,
        // the username to the session
        name: req.session.name,
        // and the user's email.
        email: req.session.email
    });
});

//Get, renders hotels
router.get('/hotels', function(req,res) {
    res.render('trips/hotels', {
        //keep logged_in
        logged_in: req.session.logged_in,
        // the username to the session
        name: req.session.name,
        // and the user's email.
        email: req.session.email
    });
});

//Get, renders itineraries
router.get('/itinerary', function(req,res) {
  res.render('trips/itinerary', {
    //keep logged_in
    logged_in: req.session.logged_in,
    // the username to the session
    name: req.session.name,
    // and the user's email.
    email: req.session.email
  });
});


//Use the Trip model to save the trip itinerary.
//Where the id is the user id of the logged in user
//This will show the trip search terms for the trip.
router.get('/', function (req, res) {
    Trip.find (
        { '_id': req.params.id }
        //then...
        ).then(function(trips) {
            //grab the user info from our req.
            //This info gets saved to req via the users-controller.js file
            res.render('trips/itinerary', {
                name: req.session.name,
                email: req.session.email,
                logged_in: req.session.logged_in,
                depcity: req.session.depcity,
                destcity: req.session.destcity,
                departdate: req.session.departdate,
                returndate: req.session.returndate,
                numvol: req.session.numvol,
                itinerary: req.session.itinerary,
                trips: trips
            })
        })
});


//=================================================================================================
//Use the Trip schema to create a trip based on what's
//passed in req.body (depcity, destcity, departdate, returndate, numvol)
router.post('/create', function(req,res) {
  User.find(
    { email: req.body.email }
  ).then(function(users) {
    console.log('POST CREATE', users);
    if (users.length > 0){
      console.log(users);
      res.send("We already have an email or username for this account");
    } else {
      // Using bcrypt, generate a 10-round salt,
      // then use that salt to hash the user's password.
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {

          // Using the User model, create a new user,
          // storing the email they sent and the hash you just made
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            pwdhash: hash
          });
          console.log('newUser::', newUser);
          newUser.save(function(err){
            console.log('saving user', err);
            //enter the user's session by setting properties to req.
            //save the logged in status to the session
            req.session.logged_in = true;
            //the username to the session
            req.session.name = newUser.name;
            // and the user's email.
            req.session.email = newUser.email;
            // redirect to home on login
            res.redirect('/')
          })
        })
      })
    }
  })
});


router.post ('/create', function (req, res) {
    const newTrip = new Trip ({
        depcity: req.body.usersOrigin,
        destcity: req.body.usersDestination,
        departdate: req.body.departingDate,
        returndate: req.body.returningDate,
        numvol: req.body.volunteers,
        itinerary: req.body.itinerary,
        '_id': req.params._id
    });
        newTrip.save(function(err) {
            res.redirect('/');
        })
});

// Use the Trip model to update itinerary to move to itinerary column
// using the id of the trip (as passed in the url)
router.put('/update/:id', function (req, res) {
    Trip.update(
        { '_id' : req.params.id },
        { $set: {itinerary: req.body.itinerary}}
    )
    // connect it to this .then.
        .then(function (result) {
            res.redirect('/trips');
        })
});

//Use the Trip schema to delete a trip
//based on the id passed in the url
router.delete('/delete/:id', function(req,res) {
    Trip.remove(
        { '_id': req.params.id }
    )
    // connect it to this .then.
        .then(function() {
            res.redirect('/');
        })
});

module.exports = router;
