import axios from "axios";

const pokeDbApi = axios.create({
    baseURL: '/api',
    headers: {
        "accept-encoding": null
    }
});

export default pokeDbApi;
