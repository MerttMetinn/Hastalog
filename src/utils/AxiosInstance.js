import axios from "axios";

const instance = axios.create({
    baseURL : "https://localhost:7008/api/",
});

instance.interceptors.request.use(request => {

    const token = localStorage.getItem("AccessToken");

    request.headers.Authorization = `Bearer ${token}`;

    return request;
});

export default instance