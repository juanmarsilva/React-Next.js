import { createContext, Key } from 'react';
import { Result, SmallPokemon } from '../../interfaces';
import { CreatedPokemon } from '../../interfaces/created-pokemon';


interface ContextProps {
    pokemons: SmallPokemon[];
    allPokemons: SmallPokemon[];
    types: Result[];
    dbPokemons: CreatedPokemon[];

    // Methods
    filterPokemonsByType: ( type: Key ) => void;
    getPokemonTypes: () => void;
    orderByAttack: ( type: Key ) => void;
    searchPokemon: ( name: string ) => void;
}


export const PokemonContext = createContext( {} as ContextProps );