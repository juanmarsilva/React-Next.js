import { Key, useContext, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import { PokemonContext } from "../../context";

export const Ordering = () => {

    const { orderByAttack } = useContext( PokemonContext );

    return (
        <Dropdown>
            
            <Dropdown.Button flat > Order </Dropdown.Button>
            
            <Dropdown.Menu aria-label="Static Actions" onAction={ ( key: Key ) => orderByAttack( key ) }  >

                <Dropdown.Item key='asc' textValue="Asc"> Asc </Dropdown.Item>
                <Dropdown.Item key='dsc' textValue="Dsc"> Dsc </Dropdown.Item>
                
            </Dropdown.Menu>
        </Dropdown>
    );
};
