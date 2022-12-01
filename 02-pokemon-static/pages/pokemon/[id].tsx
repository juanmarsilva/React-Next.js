import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { Card, Grid, Text, Button, Container, Image } from '@nextui-org/react';


interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    // const router = useRouter();
    const { name, sprites, id } = pokemon;
    const { other, front_default, front_shiny, back_default, back_shiny } = sprites;


    return (
        <Layout title={`${ id } - ${ name } `} >
            
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
                                ghost                            
                            >
                                Guardar en Favoritos
                            </Button>

                        </Card.Header>

                        <Card.Body>

                            <Text size={ 30 }> Sprites: </Text>

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

    const pokemon649 = [...Array(649)].map(( value, index ) => `${ index + 1 }`)
    
    return {
        paths: pokemon649.map( id => ({
            params: { id }
        })),
        fallback: false
    };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { id } = params as { id: string };
    const { data } = await pokeApi<Pokemon>(`/pokemon/${ id }`);

    const { name, sprites } = data;
    const { other, front_default, front_shiny, back_default, back_shiny } = sprites;

    const specificSprites = {
        other,
        front_default,
        front_shiny,
        back_default,
        back_shiny
    }

    const pokemon = {
        name,
        sprites: specificSprites,
        id
    };
    
    return {
      props: {
        pokemon
      }
    };
};
  


export default PokemonPage;
