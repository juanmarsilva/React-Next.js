import { Type } from "./";

export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
    types: string[];
    stats: SmallPokemonStat[]; 
}

export interface SmallPokemonStat {
    name: string;
    value: number;
}
