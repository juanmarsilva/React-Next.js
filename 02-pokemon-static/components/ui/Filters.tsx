import { Key, useContext, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import { PokemonContext } from "../../context";

export const Filters = () => {

    const { filterPokemonsByType, getPokemonTypes, types } = useContext( PokemonContext );

    useEffect(() => {
        getPokemonTypes();
    });

    return (
        <Dropdown>
            
            <Dropdown.Button flat id="Type" > Type </Dropdown.Button>
            
            <Dropdown.Menu aria-label="Actions" onAction={ ( key: Key ) => filterPokemonsByType( key ) }  >

                {
                    types.map(type => <Dropdown.Item textValue={ type.name } key={ type.name }> { type.name } </Dropdown.Item>)
                }

            </Dropdown.Menu>
        </Dropdown>
    );
};
