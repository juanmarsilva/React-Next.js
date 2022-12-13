import React, { useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Card, Grid, Text, Container, Image, Progress, Button, Row } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '../../components/';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const { name, sprites, id, stats, types, height, weight } = pokemon;
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

                        <Card.Body css={{ textAlign: 'center', display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>

                            <Card.Image 
                                src={ other?.dream_world.front_default  || '/no-image.png' }
                                alt={ name }
                                width='100%'
                                height={ 200 }
                            />

                            <Text h2 transform='capitalize' > { name } </Text>

                          
                            {
                                types.map( ({ type })=> (
                                    <Button key={ type.name } disabled auto bordered color="primary" css={{ px: "$13", width: '120px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }} >
                                        <Text span transform='capitalize' > { type.name } </Text>
                                    </Button>    
                                ))
                            }

                            <Row>

                                <Container display='flex' direction='column' alignItems='center' alignContent='center' justify='center'>

                                    <Text h5 > Height </Text>
                                    <hr style={{ width: '40px' }}/>
                                    <Text h5 > { height/10 }m </Text>

                                </Container>

                                <Container display='flex' direction='column' alignItems='center' alignContent='center' justify='center'>

                                    <Text h5 > Weight </Text>
                                    <hr style={{ width: '40px' }}/>
                                    <Text h5 > { weight/10 }m </Text>

                                </Container>

                            </Row>

                        </Card.Body>

                    </Card>

                </Grid>

                <Grid xs={ 12 } sm={ 8 } >
                    <Card>

                        <Card.Header css={{ display: 'flex', justifyContent: 'flex-end' }} >

                            <button
                                style={{ appearance: 'none', border: 'none', backgroundColor: 'transparent', marginRight: '10px', marginTop: '10px' }}
                                onClick={ onToggleFavorite }                            
                            >
                                { isInFavorites ? <BsSuitHeartFill size={ 25 } /> : <BsSuitHeart size={ 25 } /> }
                            </button>

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

                            <Container display='flex' direction='column' gap={ 2 }>

                                {
                                    stats.map( (stat) => (
                                        <Grid justify='center' alignItems='center' key={ stat.stat.name } >
                                            <Text h4 transform='capitalize'> { stat.stat.name }: { stat.base_stat } </Text>
                                            <Progress value={ stat.base_stat } shadow color="primary" status="primary" max={ 255 } />
                                        </Grid>
                                    ))
                                
                                }

                            </Container>

                        </Card.Body>

                    </Card>

                </Grid>

            </Grid.Container>


        </Layout>
    )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon649 = [...Array(649)].map(( value, index ) => `${ index + 1 }`)
    
    return {
        paths: pokemon649.map( id => ({
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
