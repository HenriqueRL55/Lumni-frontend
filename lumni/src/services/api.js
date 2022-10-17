import axios from "axios";

const apiUrl = "https://lumni-backend.herokuapp.com";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
