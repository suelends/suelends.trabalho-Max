import axios from 'axios';

const ApiLogin = axios.create({
  baseURL: "http://localhost:8080/login",
responseType: "json"
})

export default ApiLogin;