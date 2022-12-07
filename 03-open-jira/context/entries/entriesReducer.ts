import { EntriesState } from './';

type EntriesActionType =
| { type: '[Entries] - ActionName' }


export const entriesReducer = ( state: EntriesState, { type }: EntriesActionType ): EntriesState => {

    if( type === '[Entries] - ActionName' ) {
        return {
           ...state,
        }
    }

    return state;
}