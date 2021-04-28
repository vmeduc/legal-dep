import axios from 'axios';

axios.defaults.baseURL = "https://testserverv.herokuapp.com/";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  console.log('token - ', `Bearer ${token}`);
  axios.defaults.headers.common["Content-Type"] = "application/json;charset=UTF-8";
}