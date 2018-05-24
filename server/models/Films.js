import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: {type: String},
    release: {type: Number},
    form: {type: String},
    stars: {type: String}
});

const Film = mongoose.model('Film', FilmSchema);