// require mongoose
const mongoose = require('mongoose');
// create Schema class
const Schema = mongoose.Schema;

// Create trip schema
const TripSchema = new Schema({
    // users origin
    usersOrigin: {
        type: String,
        required:true
    },
    //destination city
    usersDestination: {
        type: String,
        required:true
    },
    //depart date
    departDate: {
        type: Date,
        required:true
    },
    //return date
    returnDate: {
        type: Date,
        required:true
    },

    //departing airline
    departFly: String,

    //departing flight number
    flyNumber1: String,

    //returning airline
    returnFly: String,

    //returning flight number
    flyNumber2: String,

    //hotel
    hotel: String,

    //hotel address
    hotAddress: String,

    //hotel phone
    hotPhone: String,

    //volunteer organization
    volOrg: String,

    //volunteer date
    volDate: Date,

    //organization address
    volAddress: String,

    //number of volunteers
    volunteers: Number
});


// export the schema
module.exports = TripSchema;