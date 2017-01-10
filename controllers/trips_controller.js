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
        email: req.session.email,
        //and the user id
        _userId: req.session._userId
    });
});

//Get, renders flights
router.get('/expedia', function(req,res) {
    res.render('trips/expedia', {
        //keep logged_in
        logged_in: req.session.logged_in,
        // the username to the session
        name: req.session.name,
        // and the user's email.
        email: req.session.email,
        //and the user id.
        _userId: req.session._userId
    });
});

//This will get the trips saved by the user and render them
router.get('/itinerary', function (req, res) {
    Trip.find (
        { _userId : req.session._userId }
        //then...
        ).then(function(trips) {
            //grab the user info from our req.
            //This info gets saved to req via the users-controller.js file
            res.render('trips/itinerary', {
                //keep logged_in
                logged_in: req.session.logged_in,
                //the username to the session
                name: req.session.name,
                // and the user's email
                email: req.session.email,
                //and the id
                _userId: req.session._userId,
                usersOrigin: req.session.usersOrigin,
                usersDestination: req.session.usersDestination,
                departDate: req.session.departDate,
                returnDate: req.session.returnDate,
                departFly: req.session.departFly,
                flyNumber1: req.session.flyNumber1,
                returnFly: req.session.returnFly,
                flyNumber2: req.session.flyNumber2,
                hotel: req.session.hotel,
                hotAddress: req.session.hotAddress,
                hotPhone: req.session.hotPhone,
                volOrg: req.session.volOrg,
                volDate: req.session.volDate,
                volAddress: req.session.volAddress,
                volunteers: req.session.volunteers,
                trips: trips
            })
        })
});


//=================================================================================================
//Use the Trip schema to create a trip based on what's
//passed in req.body ()

router.post ('/trips/itinerary/create', function (req, res) {
    const newTrip = new Trip ({
      usersOrigin: req.body.usersOrigin,
      usersDestination: req.body.usersDestination,
      departDate: req.body.departDate,
      returnDate: req.body.returnDate,
      departFly: req.body.departFly,
      flyNumber1: req.body.flyNumber1,
      returnFly: req.body.returnFly,
      flyNumber2: req.body.flyNumber2,
      hotel: req.body.hotel,
      hotAddress: req.body.hotAddress,
      hotPhone: req.body.hotPhone,
      volOrg: req.body.volOrg,
      volDate: req.body.volDate,
      volAddress: req.body.volAddress,
      volunteers: req.body.volunteers,
    });
        newTrip.save(function(req, res) {
          //console.log('saving trip', err);
            res.redirect('/trips/itinerary');
        })
});

//Use the Trip Schema to delete a trip
//based on the id passed in the url
router.delete('/destroy/:id', function(req,res) {
    Trip.remove(
        { _id }
    )
    // connect it to this .then.
        .then(function() {
            res.redirect('/itinerary');
        })
});

module.exports = router;
