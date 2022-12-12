import React, { useContext  } from 'react';
import { NextPage  } from 'next';
import { Grid } from '@nextui-org/react';
import { Layout, PokemonCard, Paginated }  from '../components/';
import { usePaginated } from '../Hooks';
import { PokemonContext } from '../context';
// import { Loading } from "@nextui-org/react";


const HomePage: NextPage = () => {

  const { pokemons } = useContext( PokemonContext );
  
  const { currentPage, pokemonsPerPage, pages, setCurrentPage, currentPokemons } = usePaginated({ pokemons });

  return (
    <Layout title='Listado de Pokémons'>

      <Paginated currentPage={ currentPage } pokemonsPerPage={ pokemonsPerPage } pages={ pages } setCurrentPage={ setCurrentPage } />
      
      <Grid.Container gap={ 2 } justify='center' >
        {
         
          currentPokemons?.map(( pokemon ) => <PokemonCard key={ pokemon.id } pokemon={ pokemon }  /> )
        
        }
      </Grid.Container>

    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.



export default HomePage;