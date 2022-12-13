
interface Stat {
    name: string;
    base_stat: number;
}

export interface CreatedPokemon {
    _id:                      string;
    height:                   number;
    name:                     string;
    sprites:                  string;
    stats:                    Stat[];
    types:                    string[];
    weight:                   number;
}

