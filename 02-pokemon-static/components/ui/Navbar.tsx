import React from 'react';
import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
   
   const { theme } = useTheme()

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

            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
                alt='icono de la app'
                width={50}
                height={50}
            />
            
            <Text color='white' h2 > P </Text>
            <Text color='white' h3 > okémon </Text>

            <Spacer css={{ flex: 1 }} />

            <Text color='white' h3 > Favoritos </Text>
        </div>
    );
};
