//set up the router to redirect to homepage
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('home', {
      //keep logged_in
      logged_in: req.session.logged_in,
      // the username to the session
      name: req.session.name,
      // and the user's email.
      email: req.session.email
    });
});

module.exports = router;