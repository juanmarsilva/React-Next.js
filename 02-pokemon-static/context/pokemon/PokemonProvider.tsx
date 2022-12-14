import { FC, useReducer, Key, useEffect } from 'react';
import { pokeApi } from '../../api';
import { SmallPokemon, Types, Result, Pokemon } from '../../interfaces';
import { PokemonContext, pokemonReducer } from './';
import pokeDbApi from '../../api/pokeDbApi';
import { PokemonListResponse } from '../../interfaces/pokemon-list';



export interface PokemonState {
    pokemons: SmallPokemon[];
    allPokemons: SmallPokemon[];
    types: Result[];
    dbPokemons: SmallPokemon[];
}

interface Props {
    children?: JSX.Element | JSX.Element[];
}


const Pokemon_INITIAL_STATE: PokemonState = {
   pokemons: [],
   allPokemons: [],
   types: [],
   dbPokemons: [],
}


export const PokemonProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( pokemonReducer, Pokemon_INITIAL_STATE );

    const getAllDbPokemons = async () => {
        
        const { data } = await pokeDbApi<SmallPokemon[]>('/pokemon');

        dispatch({ type: '[Pokemon] - GET DB POKEMONS', payload: data })

    };

    const getPokemons = async () => {
        
        const { data } = await pokeApi<PokemonListResponse>('/pokemon');

        dispatch({ type: '[Pokemon] - GET POKEMONS', payload: data.results  });
    }

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

    };

    const searchPokemon = async ( name: string ) => {

        try {

            const { data } = await pokeApi<SmallPokemon[]>(`/pokemon/${ name.toLowerCase() }`);

            dispatch({ type: '[Pokemon] - SEARCH POKEMON', payload: data });

        } catch (err) {
            
            // dispatch({ type: '[Pokemon] - SEARCH POKEMON', payload: { msg: 'No fue encontrado dicho Pokemon' } })

        }
    };

   
    useEffect(() => {
        getPokemons();
        getAllDbPokemons();
        getPokemonTypes();
    }, []);

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

