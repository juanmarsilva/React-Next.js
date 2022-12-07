import { DragEvent, FC, useContext, useMemo } from 'react';
import { Paper, List } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext( EntriesContext );
    const { isDragging } = useContext( UIContext )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [ entries ])

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {

        const id = event.dataTransfer.getData('text');

    };

    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {

        event.preventDefault();

    };

    return (
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', backgroundColor: 'transparent', overflow: 'auto', padding: '3px 5px' }}>

                <List sx={{ opacity: isDragging ? 0.3 : 1, transition: 'all .3s' }} >
                    {
                        entriesByStatus.map( entry => <EntryCard key={ entry._id } entry={ entry } /> )
                    }
                </List>

            </Paper>
        </div>
    );
};
