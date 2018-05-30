import express from 'express';
import bodyParser from 'body-parser';
import * as dbFilms from './controllers/FilmController';
import {serverPort} from '../config';

const app = express();

dbFilms.setUpConnection();

app.use(bodyParser.json());

//routing
app.get('/api/films', (req, res) => {
   dbFilms.getFilms().then(data => res.send(data));
});

app.post('/api/films', (req, res) => {
    dbFilms.addFilm(req.body).then(data => res.send(data));
});

app.post('/api/load', (req, res) => {
    dbFilms.addLoadedFilm(req.body).then(data => res.send(data));
});

app.delete('/api/films/:id', (req, res) => {
    dbFilms.removeFilm(req.params.id).then(data => res.send(data))
});

app.delete('/api/remove', (req, res) => {
    dbFilms.removeAllFilms().then(data => res.send(data))
});

const srever = app.listen(serverPort, () => {
    console.log(`server listen on port ${serverPort}`);
});