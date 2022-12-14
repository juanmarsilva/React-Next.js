import { Key } from 'react';
import { Result, SmallPokemon } from '../../interfaces';
import { PokemonState } from './';


type PokemonActionType =
| { type: '[Pokemon] - GET POKEMONS', payload: SmallPokemon[] }
| { type: '[Pokemon] - GET TYPES', payload: Result[] }
| { type: '[Pokemon] - FILTER BY TYPE', payload: Key }
| { type: '[Pokemon] - ORDER BY ATTACK', payload: Key }
| { type: '[Pokemon] - SEARCH POKEMON', payload: SmallPokemon[] }
| { type: '[Pokemon] - GET DB POKEMONS', payload: SmallPokemon[] }



export const pokemonReducer = ( state: PokemonState, { type, payload }: PokemonActionType ): PokemonState => {

    if( type === '[Pokemon] - GET POKEMONS' ) {
        return {
           ...state,
           allPokemons: payload,
           pokemons: payload,
        };
    };

    if( type === '[Pokemon] - GET TYPES' ) {
        return {
            ...state,
            types: payload,
        };
    };

    if( type === '[Pokemon] - FILTER BY TYPE' ) {

        if( payload === 'all' ) {
            return {
                ...state,
                pokemons: state.allPokemons,
            };
        };

        return {
            ...state,
            pokemons: state.allPokemons.filter( pokemon => pokemon.types.includes( `${payload}` ) )
        };
    };

    if( type === '[Pokemon] - ORDER BY ATTACK' ) {
        
        if( payload === 'asc' ) {
            return {
                ...state,
                pokemons: state.pokemons.sort(( a, b ) => a.stats[1].base_stat - b.stats[1].base_stat )
            };
        };

        if( payload === 'dsc' ) {
            return {
                ...state,
                pokemons: state.pokemons.sort(( a, b ) => b.stats[1].base_stat - a.stats[1].base_stat )
            };
        }
    }

    if( type === '[Pokemon] - SEARCH POKEMON' ) {

        return {
            ...state,
            pokemons: payload
        }
    };

    if( type === '[Pokemon] - GET DB POKEMONS' ) {
        return {
            ...state,
            dbPokemons: payload,
        }
    }

    return state;
};