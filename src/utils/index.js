import { API_KEY, API_URL } from '@env';

export const getUrl = (params) =>
  `${API_URL}?api_key=${API_KEY}&language=en-US&query=${params}&page=1&include_adult=false`
