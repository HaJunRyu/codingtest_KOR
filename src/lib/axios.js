import axios from 'axios';

export const customAxios = axios.create({ baseURL: 'https://api.punkapi.com/v2' });
