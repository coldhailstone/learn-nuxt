import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

function fetchProducts() {
  return instance.get('/products');
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

export {
  fetchProducts,
  fetchProductById
}