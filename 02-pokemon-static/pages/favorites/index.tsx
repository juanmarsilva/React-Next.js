import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { EmptyFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';
import { FavoritePokemon } from '../../utils/localFavorites';


const FavoritesPage = () => {

    const [ favoritePokemons, setFavoritePokemons ] = useState<FavoritePokemon[]>([]);

    useEffect(() => {
        setFavoritePokemons( localFavorites.pokemons );
    }, []);

    return (
        <Layout title='Pokémons - Favoritos' >
            
            {
                favoritePokemons.length === 0

                ? <EmptyFavorites />

                : <FavoritePokemons favoritePokemons={ favoritePokemons } />
            }

        </Layout>
    )
}

export default FavoritesPage;