const mongoose = require('mongoose');

var schema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    poster_image: {
        type: String,
        required: true
    }
});

var Movie = mongoose.model('Movie', schema, "Movies")
// Movie.createIndexes({name:'text'})
module.exports = { Movie };
