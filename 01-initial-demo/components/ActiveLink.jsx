import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

const ActiveLink = ( {href, text} ) => {
    
    // esto me trae datos sobre la ruta. asPath es la ruta en la que me encuentro.
    const { asPath } = useRouter();

    return (
        <Link href={ href } style={ asPath === href ? style : null }>
            { text }
        </Link>
    );
};

export default ActiveLink;