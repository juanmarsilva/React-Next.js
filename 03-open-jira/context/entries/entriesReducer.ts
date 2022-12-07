import { EntriesState } from './';
import { Entry } from '../../interfaces';

type EntriesActionType =
| { type: '[Entry] - Add Entry', payload: Entry }


export const entriesReducer = ( state: EntriesState, { type, payload }: EntriesActionType ): EntriesState => {

    if( type === '[Entry] - Add Entry' ) {
        return {
           ...state,
           entries: [...state.entries, payload]
        };
    };

    return state;
}