import { FC } from 'react';
import { Pagination, Grid } from '@nextui-org/react';

interface Props {
    currentPage: number;
    pokemonsPerPage: number;
    pages: number;

    // Methods
    setCurrentPage: (page: number) => void;
}

export const Paginated: FC<Props> = ({ currentPage, pokemonsPerPage, pages, setCurrentPage }) => {

    
    
    return (
        <Grid style={{ padding: '20px 10px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

            <Pagination 
                noMargin 
                shadow 
                total={ pages } 
                initialPage={1}
                onChange={ ( page ) => setCurrentPage( page ) }
            />

        </Grid>
    )
}
