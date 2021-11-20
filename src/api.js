import axios from 'axios';

const firebaseAPI = process.env.REACT_APP_FIREBASE_API_URL;

export const createLink = (name, url) => axios.put(`${firebaseAPI}/links/${name}.json`, { url });
export const getLink = name => axios.get(`${firebaseAPI}/links/${name}.json`);