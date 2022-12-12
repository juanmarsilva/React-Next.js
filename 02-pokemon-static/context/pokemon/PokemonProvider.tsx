import { FC, useReducer, useEffect, Key } from 'react';
import { pokeApi } from '../../api';
import { SmallPokemon, PokemonListResponse, Type, Types, Result, Pokemon, Stat } from '../../interfaces';
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

    const getAllPokemons = async () => {

        try {

            const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=151');

            let pokemons: SmallPokemon[] = data.results.map(( pokemon, index ) => {  
                return {
                    ...pokemon,
                    id: index + 1,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`,
                }
            });

            for ( let pokemon of pokemons ) {
                
                const { data } = await pokeApi<Pokemon>(`/pokemon/${ pokemon.id }`);
 
                const { types, stats } = data;

                pokemon.types = types.map( (type: Type) => type.type.name );
                pokemon.stats = stats.map((stat: Stat) => ({
                    name: stat.stat.name,
                    value: stat.base_stat
                }))
                
            };

            dispatch({ type: '[Pokemon] - GET POKEMONS', payload: pokemons });

        } catch (err) {
            console.log(err)
        }
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

    }


    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
       <PokemonContext.Provider value={{ 
            ...state,
            
            // Methods
            filterPokemonsByType,
            getPokemonTypes,
            orderByAttack,
        }} 
       >
          { children }
       </PokemonContext.Provider>
    )
}

