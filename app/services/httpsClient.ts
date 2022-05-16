import axios from 'axios';
import {BASE_URL} from '../constants/index'

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
});

export { httpClient };
