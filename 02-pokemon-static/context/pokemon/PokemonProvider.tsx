import { FC, useReducer, Key } from 'react';
import { pokeApi } from '../../api';
import { SmallPokemon, Types, Result, Pokemon } from '../../interfaces';
import { PokemonContext, pokemonReducer } from './';


export interface PokemonState {
    pokemons: SmallPokemon[];
    allPokemons: SmallPokemon[],
    types: Result[]
}

interface Props {
    children?: JSX.Element | JSX.Element[];
}


const Pokemon_INITIAL_STATE: PokemonState = {
   pokemons: [],
   allPokemons: [],
   types: []
}


export const PokemonProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( pokemonReducer, Pokemon_INITIAL_STATE )

    const filterPokemonsByType = ( type: Key ) => dispatch({ type: '[Pokemon] - FILTER BY TYPE', payload: type });

    const orderByAttack = ( type: Key ) => dispatch({ type: '[Pokemon] - ORDER BY ATTACK', payload: type })

    const getPokemonTypes = async () => {

        try {

            const { data } = await pokeApi<Types>('/type');

            data.results = [ { name: 'all' }, ...data.results ];

            dispatch({ type: '[Pokemon] - GET TYPES', payload: data.results });

        } catch (err) {

            console.log(err);

        }

    }

    const searchPokemon = async ( name: string ) => {

        try {

            const { data } = await pokeApi<SmallPokemon[]>(`/pokemon/${ name.toLowerCase() }`);

            dispatch({ type: '[Pokemon] - SEARCH POKEMON', payload: data });

        } catch (err) {
            
            // dispatch({ type: '[Pokemon] - SEARCH POKEMON', payload: { msg: 'No fue encontrado dicho Pokemon' } })

        }
    }


    return (
       <PokemonContext.Provider value={{ 
            ...state,
            
            // Methods
            filterPokemonsByType,
            getPokemonTypes,
            orderByAttack,
            searchPokemon,
        }} 
       >
          { children }
       </PokemonContext.Provider>
    )
}

