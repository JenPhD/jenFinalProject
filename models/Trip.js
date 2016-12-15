// require mongoose
const mongoose = require('mongoose');
// create Schema class
const Schema = mongoose.Schema;

// Create trip schema
const TripSchema = new Schema({
    // departure city
    depcity: {
        type: String,
        required:true
    },
    //destination city
    destcity: {
        type: String,
        required:true
    },
    //depart date
    departdate: {
        type: Date,
        required:true
    },
    //return date
    returndate: {
        type: Date,
        required:true
    },
    //number of volunteers
    numvol: {
        type: Number
    },
    //has saved itinerary or not
    itinerary: {
        type: Boolean,
        default: false
    },
    // this only saves one user's ObjectId. ref refers to the User model.
    email: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
// Create the Trip model with the TripSchema
const Trip = mongoose.model('Trip', TripSchema);

// export the schema
module.exports = Trip;