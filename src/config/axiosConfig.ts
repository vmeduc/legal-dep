import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:8081/api/v1/";
axios.defaults.baseURL = "https://testserverv.herokuapp.com/api/v1/";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";
}