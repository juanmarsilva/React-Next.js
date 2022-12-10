import { useState } from "react";
import { Dropdown } from "@nextui-org/react";

export const Filters = () => {



    return (
        <Dropdown>
            
            <Dropdown.Button flat > Type </Dropdown.Button>
            
            <Dropdown.Menu aria-label="Static Actions" >

                <Dropdown.Item key='fire' > Fire </Dropdown.Item>
                <Dropdown.Item key='water' > Water </Dropdown.Item>
                <Dropdown.Item key='plant' > Plant </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
    );
};
