import { FC, useReducer, useEffect } from 'react';
import { pokeApi } from '../../api';
import { SmallPokemon, PokemonListResponse } from '../../interfaces';
import { PokemonContext, pokemonReducer } from './';


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

        try {

            const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=649');

            let pokemons: SmallPokemon[] = data.results.map<any>(( pokemon, index ) => {  
                return {
                    ...pokemon,
                    id: index + 1,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`,
                }
            });

            for ( let pokemon of pokemons ) {
                
                const { data } = await pokeApi(`/pokemon/${ pokemon.id }`);
 
                const { types, stats } = data;

                pokemon.types = types;
                pokemon.stats = stats;
                
            };

            dispatch({ type: '[Pokemon] - GET POKEMONS', payload: pokemons });

        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
       <PokemonContext.Provider value={{ ...state}} >
          { children }
       </PokemonContext.Provider>
    )
}

