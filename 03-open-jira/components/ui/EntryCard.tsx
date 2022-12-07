import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui/UIContext';


interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setIsDragging } = useContext( UIContext )

    const onDragStart = ( event: DragEvent ) => {
        
        event.dataTransfer.setData('text', entry._id );

        // todo: modificar el estado para indicar que estoy haciendo drag
        setIsDragging( true );
    };

    const onDragEnd = ( event: DragEvent ) => {
        setIsDragging( false );
    };

    return (
        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={ onDragStart }
            onDragEnd = { onDragEnd }
        >
            <CardActionArea>

                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line'}}> { entry.description } </Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }} >

                    <Typography variant='body2' > Hace 30 minutos</Typography>

                </CardActions>

            </CardActionArea>

        </Card>
    );
};
