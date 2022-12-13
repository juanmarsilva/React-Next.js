
interface SeedData {
    entries: SeedPokemon[];
}

interface Stat {
    name: string;
    base_stat: number;
}

interface SeedPokemon {
    name: string;
    stats: Stat[];
    types: string[];
    height: number;
    weight: number;
    sprites: string;
}


export const seedData: SeedData = {
    entries: [
        {
            name: 'Juan Martin',
            height: 1.7,
            weight: 70,
            stats: [
                {
                    base_stat: 25,
                    name: 'hp',
                }
            ],
            types: ['grass'],
            sprites: '',
        },
    ],
};