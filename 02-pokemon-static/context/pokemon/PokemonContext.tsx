import { createContext } from 'react';
import { SmallPokemon } from '../../interfaces';


interface ContextProps {
    pokemons: SmallPokemon[];
}


export const PokemonContext = createContext( {} as ContextProps );