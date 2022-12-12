import { createContext, Key } from 'react';
import { Result, SmallPokemon } from '../../interfaces';


interface ContextProps {
    pokemons: SmallPokemon[];
    allPokemons: SmallPokemon[];
    types: Result[];

    // Methods
    filterPokemonsByType: ( type: Key ) => void;
    getPokemonTypes: () => void;
    orderByAttack: ( type: Key ) => void;
}


export const PokemonContext = createContext( {} as ContextProps );