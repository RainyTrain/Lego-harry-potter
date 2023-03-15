import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rebrickable.com/api/v3/lego/',
  headers: {

    Authorization: `Key ${process.env.REACT_APP_ACCESS_KEY}`,
  },
});
