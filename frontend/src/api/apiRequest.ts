import axios from 'axios';
import { authApi } from './auth';
const BFF_URI = process.env.NEXT_PUBLIC_BFF_URI;

export const apiClient = axios.create({
  baseURL: BFF_URI + '/api',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});
