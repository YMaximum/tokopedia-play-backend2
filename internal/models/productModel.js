const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
    productUrl: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Products', productSchema);