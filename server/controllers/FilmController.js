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
        title: data.title,
        release: data.release,
        form: data.form,
        stars: data.stars
    });

    return film.save();
}

export function addLoadedFilm(data){
    let films;
    for (let key in data) {
        if (data.hasOwnProperty(key)){
              films = new Film({
                          title: data[key].name,
                          release: data[key].release,
                          form: data[key].form,
                          stars: data[key].stars
              }).save();
        }
    }
    return films;
}

export function removeFilm(id){
    return Film.findById(id).remove();
}

export function removeAllFilms(){
    return Film.remove();
}