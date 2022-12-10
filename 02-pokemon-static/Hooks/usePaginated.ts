import { useState } from "react";
import { SmallPokemon } from "../interfaces";

interface Props {
    pokemons: SmallPokemon[];
}


export const usePaginated = ( { pokemons }: Props ) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(59);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice( indexOfFirstPokemon, indexOfLastPokemon );
    const pages = Math.ceil(pokemons.length / pokemonsPerPage);

    return {
        currentPage,
        setCurrentPage,
        pokemonsPerPage,
        setPokemonsPerPage,
        pages,
        currentPokemons
    }

};
