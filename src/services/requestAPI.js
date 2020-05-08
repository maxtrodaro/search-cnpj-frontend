import axios from "axios";

const api = axios.create({
	baseURL: "https://search-cnpj.herokuapp.com",
});

export default api;
