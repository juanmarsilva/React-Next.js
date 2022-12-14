
export interface FavoritePokemon {
    id: number;
    name: string;
}


const toggleFavorite = ( id: number, name: string ) => {

    let favorites: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]' );

    if ( favorites.some( pokemon => pokemon.id === id ) ) {
        favorites = favorites.filter( pokemon => pokemon.id !== id );
    } else {
        favorites.push({ name, id });
    }

    console.log(favorites)

    localStorage.setItem('favorites', JSON.stringify( favorites ));

}

const existPokemonInFavorites = ( id: number ): boolean => {

    if( typeof window === 'undefined' ) return false;

    const favorites: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]' );

    return favorites.some( pokemon => pokemon.id === id );

};

const pokemons = (): FavoritePokemon[] => {

    return JSON.parse( localStorage.getItem('favorites') || '[]' )

};


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    toggleFavorite,
    existPokemonInFavorites,
    pokemons
}