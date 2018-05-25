import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: {type: Number},
    title: {type: String},
    release: {type: Number},
    form: {type: String},
    stars: {type: String}
});

const Film = mongoose.model('Film', FilmSchema);