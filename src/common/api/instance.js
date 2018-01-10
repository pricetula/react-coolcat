import axios from 'axios';

let baseURL = 'http://localhost:3030/';

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://express-coolcat.herokuapp.com';
}

const instance = axios.create(
  {
    baseURL,
    timeout: 2000,
  },
);

export default instance;

