import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { Layout, PokemonCard, Paginated }  from '../components/';
import { usePaginated } from '../Hooks';
import {  SmallPokemon, PokemonListResponse, Pokemon, Type, Stat } from '../interfaces';
import { pokeApi } from '../api';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  
  const { currentPage, pokemonsPerPage, pages, setCurrentPage, currentPokemons } = usePaginated({ pokemons });
  
  return (
    <Layout title='Listado de Pokémons'>

      <Paginated currentPage={ currentPage } pokemonsPerPage={ pokemonsPerPage } pages={ pages } setCurrentPage={ setCurrentPage } />
      
      <Grid.Container gap={ 2 } justify='center' >
        {
          currentPokemons?.map(( pokemon ) => <PokemonCard key={ pokemon.id } pokemon={ pokemon }  /> )
        }
      </Grid.Container>

      <Paginated currentPage={ currentPage } pokemonsPerPage={ pokemonsPerPage } pages={ pages } setCurrentPage={ setCurrentPage } />

    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async () => {
  
  const { data } = await pokeApi<PokemonListResponse>('/pokemon?limit=649');

  let pokemons: SmallPokemon[] = data.results.map(( pokemon, index )=> ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`,
  }));

  for ( let pokemon of pokemons ) {
                
    const { data } = await pokeApi<Pokemon>(`/pokemon/${ pokemon.id }`);

    const { types, stats } = data;

    pokemon.types = types.map( (type: Type) => type.type.name );
    pokemon.stats = stats.map((stat: Stat) => ({
        name: stat.stat.name,
        value: stat.base_stat
    }))
    
  };

  return {
    props: {
      pokemons
    },
    revalidate: 86400 
  }
}



export default HomePage;