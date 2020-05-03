const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
 name: String,
 description: String,
 release_year: Number,
 movie_length: String,
 genre: String,
 movie_picture: String
});
const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;