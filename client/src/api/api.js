import axios from 'axios';

export default {
    getListFilms() {
       return axios.get('/api/films');
    }
}