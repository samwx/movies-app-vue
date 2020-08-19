import axios from 'axios';

const API_KEY = 'd416af5d4faee64e25ab001d87aab5c3';
export const getBaseUrl = path => `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovieById(id) {
        return axios(getBaseUrl(`movie/${id}`));
    }
}