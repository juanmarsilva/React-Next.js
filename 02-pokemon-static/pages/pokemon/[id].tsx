import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Layout } from '../../components/layouts';


interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const router = useRouter();

    return (
        <Layout>
            <h1> { pokemon.name } </h1>
        </Layout>
    )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map(( value, index ) => `${ index + 1 }`)
    
    return {
        paths: pokemon151.map( id => ({
            params: { id }
        })),
        fallback: false
    };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { id } = params as { id: string };
    const { data } = await pokeApi<Pokemon>(`/pokemon/${ id }`);
    
    return {
      props: {
        pokemon: data
      }
    };
};
  


export default PokemonPage;
