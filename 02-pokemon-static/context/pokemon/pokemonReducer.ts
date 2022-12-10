import { SmallPokemon } from '../../interfaces';
import { PokemonState } from './';

type PokemonActionType =
| { type: '[Pokemon] - GET POKEMONS', payload: SmallPokemon[] }


export const pokemonReducer = ( state: PokemonState, { type, payload }: PokemonActionType ): PokemonState => {

    if( type === '[Pokemon] - GET POKEMONS' ) {
        return {
           ...state,
           pokemons: payload
        }
    }

    return state;
}