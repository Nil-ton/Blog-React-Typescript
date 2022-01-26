import axios from "axios";
import authService from "../auth";

const api = axios.create({
	baseURL: "http://localhost:8080",
});

api.interceptors.request.use(async (config) => {
	if (authService.token) {
		config.headers.Authorization = `Bearer ${authService.token}`;
	}
	return config;
});

export default api;
