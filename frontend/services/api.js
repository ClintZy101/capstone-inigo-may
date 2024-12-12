import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api" });

export const register = (data) => API.post("/users/register", data);
export const login = (data) => API.post("/users/login", data);

export default API;