import mongoose from 'mongoose'
import '../models/Films'
import {db} from '../../config'

const Film = mongoose.model('Film');

export function setUpConnection() {
  return mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
}

export function getFilms(){
   return Film.find();
}

export function addFilm(data){
    const film = new Film({
        id: data.id,
        title: data.name,
        release: data.release,
        form: data.form,
        stars: data.stars
    });

    return film.save();
}

export function removeFilm(id){
    return Film.findById(id).remove();
}