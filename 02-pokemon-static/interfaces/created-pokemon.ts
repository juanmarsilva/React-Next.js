import { Stat, Type } from './';


export interface CreatedPokemon {
    height:                   number;
    name:                     string;
    sprites:                  string;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

