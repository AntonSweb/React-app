import axios from 'axios';

export default {
    getListFilms() {
       return axios.get('/api/films');
    },

    addFilm(data) {
        return axios.post('/api/films', data);
    },

    loadNewFilms(data){
        return axios.post('/api/load', data);
    },

    removeFilm(id) {
        return axios.delete(`/api/films/${id}`);
    },

    removeAllFilms() {
        return axios.delete('/api/remove');
    }
}