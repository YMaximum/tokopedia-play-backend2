const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    creator: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', userSchema);