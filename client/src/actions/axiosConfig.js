import axios from 'axios';
let env = process.env.NODE_ENV;
let origin = window.location.origin + "/"; 

export const app = axios.create({
    baseURL: env === 'production' || env === 'preproduction' ? origin : 'http://localhost:5000/',
    withCredentials: false
})