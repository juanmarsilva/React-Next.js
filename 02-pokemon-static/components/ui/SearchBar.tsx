import { Grid, Input } from "@nextui-org/react";
import { TbPokeball } from 'react-icons/tb';

export const SearchBar = () => {


    return (
        <Grid style={{ padding: '20px 10px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

            <Input
                rounded
                bordered
                placeholder="Search.."
                color="primary"
                contentRight={ <TbPokeball size={ 25 } /> }
            /> 
        
        </Grid>
    )
};
