import axios from 'axios'


const API = axios.create({ baseURL: process.env.BACKEND_URL });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);