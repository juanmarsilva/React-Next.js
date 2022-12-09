import axios from "axios";

const entriesApi = axios.create({
    baseURL: '/api',
    headers: {
        "accept-encoding": null,
    },
});

export default entriesApi;