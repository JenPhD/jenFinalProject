//set up the router to redirect to homepage
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/trips');
});

module.exports = router;