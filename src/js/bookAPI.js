import axios from 'axios';

axios.defaults.baseURL = 'https://project.garyscv.com/api';

export function getBookListAPI() {
  return axios.get('books');
}

export function getBookAPI(bookId) {
  return axios.get(`books/${bookId}`);
}

export function addBookAPI(book) {
  return axios.post('books', book);
}

export function updateBookAPI(bookId, book) {
  return axios.patch(`books/${bookId}`, book);
}

export function deleteBookAPI(bookId) {
  return axios.delete(`books/${bookId}`);
}
