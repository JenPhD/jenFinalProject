// require mongoose
const mongoose = require('mongoose');
// create Schema class
const Schema = mongoose.Schema;

// Create trip schema
const TripSchema = new Schema({
    //user id
    _userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    // users origin
    usersOrigin: {
        type: String,
        required: "Origin city is required"
    },

    //destination city
    usersDestination: {
        type: String,
        required: "Destination city is required"
    },
    //depart date
    departDate: {
        type: Date,
        required: "Depart date is required"
    },
    //return date
    returnDate: {
        type: Date,
        required: "Return date is required"
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

// Create the Trip model with the TripSchema
const Trip = mongoose.model('Trip', TripSchema);
// export the model
module.exports = Trip;