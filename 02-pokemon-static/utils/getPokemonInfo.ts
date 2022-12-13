import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


export const getPokemonInfo = async ( nameOrId: string ) => {

    try {
    
        const { data } = await pokeApi<Pokemon>(`/pokemon/${ nameOrId }`);
        
        const { id, sprites, name, types, stats, height, weight, } = data;
        const { other, front_default, front_shiny, back_default, back_shiny } = sprites;
    
        const specificSprites = {
            other,
            front_default,
            front_shiny,
            back_default,
            back_shiny
        }
    
        return {
            name,
            sprites: specificSprites,
            id,
            types,
            stats,
            height,
            weight
        };
    
    } catch(err) {

        return null;
        
    }

};



