// require mongoose
const mongoose = require('mongoose');
//require Trip Schema
const TripSchema = require('./Trip');
// create Schema class
const Schema = mongoose.Schema;

// Create user schema
const UserSchema = new Schema({
    // name is required
    name: {
        type: String,
        trim: true,
        required: "Username is required"
    },
    // email is required
    email: {
        type: String,
        unique: true,
        required: "Email is required",
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    // pwdhash is required
    pwdhash: {
        type: String,
        required: "Password is required"
    },
    // refers to the trip schema, trips are stored as array of objects
    trips: [TripSchema]
});

// Create the User model with the UserSchema
const User = mongoose.model('User', UserSchema);

// export the model
module.exports = User;