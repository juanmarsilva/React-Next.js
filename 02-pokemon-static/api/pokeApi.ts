import axios from "axios";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        "accept-encoding": null
    }
});

export default pokeApi;

