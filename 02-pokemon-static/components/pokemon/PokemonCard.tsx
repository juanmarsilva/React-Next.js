import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { sprites, name, _id } = pokemon;
    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${ _id }`);
    }

    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 2 } key={ _id } >

            <Card 
                isHoverable 
                isPressable 
                onClick={ onClick }    
            >

                <Card.Body css={{ p: 1 }}>

                    <Card.Image 
                        src={ sprites }  
                        width='100%'
                        height={ 140 }
                        alt='No image'
                    />

                </Card.Body>

                <Card.Footer>
                    
                    <Row justify='space-between' >
                        <Text transform='capitalize'> { name } </Text>
                        {
                            _id > 0 && _id < 650  && <Text transform='capitalize'> { _id } </Text>
                        }
                    </Row>

                </Card.Footer>

            </Card>

        </Grid>
    )
}
