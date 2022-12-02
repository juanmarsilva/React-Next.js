import React, { useEffect, useState } from 'react';
import { Container, Image, Text } from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { EmptyFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

    const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons( localFavorites.pokemons );
    }, []);

    return (
        <Layout title='Pokémons - Favoritos' >
            
            <EmptyFavorites />

            

        </Layout>
    )
}

export default FavoritesPage;