import axios from 'axios';

const ApiPacients = axios.create({
  baseURL: "http://localhost:8080/pacients",
responseType: "json"
})

export default ApiPacients;