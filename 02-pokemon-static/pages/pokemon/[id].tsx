import React, { useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Card, Grid, Text, Button, Container, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '../../components/';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';


interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const { name, sprites, id } = pokemon;
    const { other, front_default, front_shiny, back_default, back_shiny } = sprites;
    const [ isInFavorites, setIsInFavorites ] = useState( localFavorites.existPokemonInFavorites( id ) );
    
    const onToggleFavorite = () => {
        localFavorites.toggleFavorite( id );
        setIsInFavorites( !isInFavorites );

        if( isInFavorites ) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        });
    };
    
    return (
        <Layout title={ name } >
            
            <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>

                <Grid xs={ 12 } sm={ 4 }   >

                    <Card
                        isHoverable
                        css={{ padding: '30px'}}
                    >

                        <Card.Body>

                            <Card.Image 
                                src={ other?.dream_world.front_default  || '/no-image.png' }
                                alt={ name }
                                width='100%'
                                height={ 200 }
                            />    

                        </Card.Body>

                    </Card>

                </Grid>

                <Grid xs={ 12 } sm={ 8 } >
                    <Card>

                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Text h1 transform='capitalize'> { name } </Text>

                            <Button
                                color='gradient'
                                ghost={ !isInFavorites }
                                onPress={ onToggleFavorite }                            
                            >
                                { isInFavorites ? 'En favoritos' : 'Guardar en favoritos' }
                            </Button>

                        </Card.Header>

                        <Card.Body>

                            <Container direction='row' display='flex' gap={ 0 } >

                                <Image 
                                    src={ front_default }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />

                                <Image 
                                    src={ back_default }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />

                                <Image 
                                    src={ front_shiny }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                
                                <Image 
                                    src={ back_shiny }
                                    alt={ name }
                                    width={ 100 }
                                    height={ 100 }
                                />

                            </Container>

                        </Card.Body>

                    </Card>

                </Grid>

            </Grid.Container>

        </Layout>
    )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map(( value, index ) => `${ index + 1 }`)
    
    return {
        paths: pokemon151.map( id => ({
            params: { id }
        })),
        // fallback: false
        fallback: 'blocking',
    };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo( id );

    if ( !pokemon ) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    };
    
    return {
      props: {
        pokemon 
      },
      revalidate: 86400, // revalidacion de la pag cada 24h 
    };
};
  


export default PokemonPage;
