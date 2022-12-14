import { createContext, Key } from 'react';
import { Result, SmallPokemon } from '../../interfaces';


interface ContextProps {
    pokemons: SmallPokemon[];
    allPokemons: SmallPokemon[];
    types: Result[];
    dbPokemons: SmallPokemon[];

    // Methods
    filterPokemonsByType: ( type: Key ) => void;
    getPokemonTypes: () => void;
    orderByAttack: ( type: Key ) => void;
    searchPokemon: ( name: string ) => void;
}


export const PokemonContext = createContext( {} as ContextProps );