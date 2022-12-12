import pokeApi from '../api/pokeApi';


export const getPokemonTypes = async () => {

    const { data } = await pokeApi('/types');

    return data;

}