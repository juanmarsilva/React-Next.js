import { EntriesState } from './';
import { Entry } from '../../interfaces';

type EntriesActionType =
| { type: '[Entry] - Add Entry', payload: Entry }
| { type: '[Entry] - Entry Updated', payload: Entry }
| { type: '[Entry] - Refresh Data', payload: Entry[] }


export const entriesReducer = ( state: EntriesState, { type, payload }: EntriesActionType ): EntriesState => {

    if( type === '[Entry] - Add Entry' ) {
        return {
           ...state,
           entries: [...state.entries, payload]
        };
    };

    if( type === '[Entry] - Entry Updated' ) {
        return {
            ...state,
            entries: state.entries.map( entry => {
                if( entry._id === payload._id ) {
                    entry.status = payload.status;
                    entry.description = payload.description;
                }
                return entry;
            }),
        };
    };

    if( type === '[Entry] - Refresh Data' ) {
        return {
            ...state,
            entries: [...payload],
        };
    };

    return state;
}