
export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    _id:   number;
    name: string;
    types: string[];
    stats: SmallPokemonStat[];
    height: number;
    weight: number;
    sprites: string;
}

export interface SmallPokemonStat {
    name: string;
    base_stat: number;
}
