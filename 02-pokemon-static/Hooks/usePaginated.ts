import { useState } from "react";
import { SmallPokemon } from "../interfaces";

interface Props {
    allPokemons: SmallPokemon[];
}


export const usePaginated = ( { allPokemons }: Props ) => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ pokemonsPerPage, setPokemonsPerPage ] = useState(59);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons?.slice( indexOfFirstPokemon, indexOfLastPokemon );
    const pages = Math.ceil(allPokemons?.length / pokemonsPerPage);

    return {
        currentPage,
        setCurrentPage,
        pokemonsPerPage,
        setPokemonsPerPage,
        pages,
        currentPokemons
    }

};
