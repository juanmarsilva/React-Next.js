import React, { FC, ReactElement } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
    children?: ReactElement | ReactElement[];
    title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title> { title || 'Pokemon App' } </title>
                <meta name='author' content='Juan Martin Silva' />
                <meta name='description' content={`Informacion sobre el pokemon ${ title }`} />
                <meta name='keywords' content={`${ title }, pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}

