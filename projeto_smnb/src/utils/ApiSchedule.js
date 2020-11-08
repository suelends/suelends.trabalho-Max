import axios from 'axios';

const ApiSchedule = 
 axios.create({
    baseURL: "http://localhost:8080/schedule",
  responseType: "json"
});

export default ApiSchedule;