import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

console.log("axios.defaults.headers - ", axios.defaults.headers);