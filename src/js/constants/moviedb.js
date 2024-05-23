export const API_KEY = 'add7393009d30185561651a8e7e3f1c4';
export const BASE_URL = 'https://api.themoviedb.org/3/';

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ3MzkzMDA5ZDMwMTg1NTYxNjUxYThlN2UzZjFjNCIsInN1YiI6IjY2NGFmMWFmNmY0MGMzOTVmNDkzMzJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.st8Oc5Zd3hxX4whgU159arSQTJBdBGx9DbocLAqn8Nk'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });