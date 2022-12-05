import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { EmptyFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

    const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>([]);

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