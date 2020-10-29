import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import ReactDOM from 'react-dom';
import App from './App';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Axios.interceptors.request.use(request => {
  console.log(request)

  return request
}, error => {
  console.log(error)
  return Promise.reject(error)
})

Axios.interceptors.response.use(response => {
  console.log(response)

  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


