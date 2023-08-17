const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    uploader: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    embedID: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    deal: {
        type: String
    }
})

module.exports = mongoose.model('Videos', videoSchema);