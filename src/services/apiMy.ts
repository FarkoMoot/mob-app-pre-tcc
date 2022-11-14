import axios from 'axios';

const api2 = axios.create({
  //baseURL: 'https://api-app-pre-tcc.herokuapp.com/',
  //baseURL: '181.191.6.53/32:3000',
  baseURL: 'http://54.233.146.44:3000',
});

export default api2;