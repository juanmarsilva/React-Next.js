import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './index';
import { FavoritePokemon } from '../../utils/localFavorites';


interface Props {
    favoritePokemons: FavoritePokemon[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {

    

    return (
        <Grid.Container gap={ 2 } direction='row'  justify='flex-start' >
            {
                favoritePokemons.map( ({ name, id }) => <FavoriteCardPokemon  id={ id } name={ name } key={ id }  />  )
            }
        </Grid.Container>    
    );
};
