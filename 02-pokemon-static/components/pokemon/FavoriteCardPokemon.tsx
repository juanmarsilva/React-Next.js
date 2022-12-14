import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
    id: number;
    name: string;
}

export const FavoriteCardPokemon: FC<Props> = ({ id, name }) => {

    const router = useRouter();

    const handleClick = () => {
        return router.push(`/pokemon/${ name }`)
    }

    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } >
                      
            <Card 
                isHoverable
                isPressable
                css={{ padding: 10 }}
                onPress={ handleClick }
            >
                
                <Card.Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                    width={'100%'}
                    height={ 140 }
                />
            </Card>

        </Grid> 
    );
};
