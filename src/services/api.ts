import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/'
});

export default api;

export const bova = axios.create({
  baseURL: 'http://cotacao.b3.com.br/mds/api/v1/DailyFluctuationHistory/'
});