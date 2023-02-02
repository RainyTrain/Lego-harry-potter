import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rebrickable.com/api/v3/lego/',
  headers: {
    Authorization: `key ${process.env.REACT_APP_ACCESS_KEY}`,
  },
});
