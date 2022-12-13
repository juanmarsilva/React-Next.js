import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Spacer, Text, useTheme } from '@nextui-org/react';
import { SiPokemon } from 'react-icons/si';

export const Navbar = () => {
   
   const { theme } = useTheme();

    return (
        <div style={{
            alignItems: 'center',
            backgroundColor: theme?.colors.gray50.value,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            padding: '0px 20px',
            width: '100%',
        }}>

            <NextLink href='/' passHref legacyBehavior >

                <a style={{ display: 'flex' }}>
                    
                    <Image
                        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
                        alt='icono de la app'
                        width={50}
                        height={50}
                    />

                    {/* <Text color='white' h2 > P </Text>
                    <Text color='white' h3 > okémon </Text> */}
                    <SiPokemon color='white' size={ 90 } />
                </a>

            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref legacyBehavior >
                <a>
                    <Text color='white' h3 > Favoritos </Text>
                </a>
            </NextLink>

        </div>
    );
};
