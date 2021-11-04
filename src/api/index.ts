import axios from 'axios';

export const request = axios.create({
    baseURL: `https://hamburgueria-emanuelz-martins.herokuapp.com`,
});
