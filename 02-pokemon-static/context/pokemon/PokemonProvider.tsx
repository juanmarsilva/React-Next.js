import { FC, useReducer, useEffect } from 'react';
import { pokeApi } from '../../api';
import { SmallPokemon } from '../../interfaces';
import { PokemonContext, pokemonReducer } from './';
import { PokemonListResponse } from '../../interfaces/pokemon-list';


export interface PokemonState {
    pokemons: SmallPokemon[];
}


interface Props {
    children?: JSX.Element | JSX.Element[];
}


const Pokemon_INITIAL_STATE: PokemonState = {
   pokemons: [],
}


export const PokemonProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( pokemonReducer, Pokemon_INITIAL_STATE )

    const getAllPokemons = async () => {

        const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=649');
        
        const pokemons: SmallPokemon[] = data.results.map(( pokemon, index ) => ({
            ...pokemon,
            id: index + 1,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`,
        }));

        dispatch({ type: '[Pokemon] - GET POKEMONS', payload: pokemons })

    }

    useEffect(() => {
        getAllPokemons();
    }, [])

    return (
       <PokemonContext.Provider value={{ ...state, }} >
          { children }
       </PokemonContext.Provider>
    )
}