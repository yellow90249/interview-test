import axios from 'axios';

axios.defaults.baseURL = 'https://fe-interview-api.unnotech.com';

export function getBookListAPI() {
  return axios.get('books');
}

export function getBookAPI(bookId) {
  return axios.get(`books/${bookId}`);
}

export function updateBookAPI() {}

export function deleteBookAPI() {}
