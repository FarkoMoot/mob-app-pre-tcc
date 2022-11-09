import axios from 'axios';

// ---Api Futebol
//const key_api = 'test_17485d0b15e7e9dcf47736c690c009';
// key1 = live_237b8838293c3600e8632fa98e72c3
// key2 = live_1d6b78dc2ece86eeee191097066cf1
const key_api = 'live_1d6b78dc2ece86eeee191097066cf1';
const apply_key = `Bearer ${key_api}`;

const api = axios.create({
  baseURL: 'https://api.api-futebol.com.br/v1/',
  headers: { 'Authorization': apply_key },
});

export default api;