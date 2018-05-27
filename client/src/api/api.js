import axios from 'axios';

export default {
    getListFilms() {
       return axios.get('/api/films');
    },

    addNewFilms(data) {
        return axios.post('/api/films', data);
    },

    deleteFilms(id) {
        return axios.delete(`/api/films/${id}`);
    }
}