import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { img, name, id } = pokemon;

    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } >

            <Card isHoverable isPressable >
            <Card.Body css={{ p: 1 }}>

                <Card.Image 
                    src={ img }  
                    width='100%'
                    height={ 140 }
                />

            </Card.Body>

            <Card.Footer>
                <Row justify='space-between' >
                <Text transform='capitalize'> { name } </Text>
                <Text transform='capitalize'> { id } </Text>
                </Row>

            </Card.Footer>

            </Card>

        </Grid>
    )
}
