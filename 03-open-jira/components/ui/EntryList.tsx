import { FC, useContext, useMemo } from 'react';
import { Paper, List } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext( EntriesContext );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [ entries ])

    return (
        <div>
            <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', overflow: 'auto', padding: '3px 5px' }}>

                {/* //todo: cambiaria dependiendo si esto esta haciendo drag o no */ }
                <List sx={{ opacity: 1 }} >
                    {
                        entriesByStatus.map( entry => <EntryCard key={ entry._id } entry={ entry } /> )
                    }
                </List>

            </Paper>
        </div>
    );
};
