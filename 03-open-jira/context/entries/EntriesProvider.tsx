import { FC, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '../../apis';

export interface EntriesState {
   entries: Entry[];
};


interface Props {
   children?: JSX.Element | JSX.Element[];
};


const Entries_INITIAL_STATE: EntriesState = {
   entries: [],
};


export const EntriesProvider: FC<Props> = ({ children }) => {

   const [ state, dispatch ] = useReducer( entriesReducer, Entries_INITIAL_STATE );

   const addNewEntry = async ( description: string ) => {
      
      try {

         const { data } = await entriesApi.post<Entry>('/entries', { description } )

         dispatch({ type: '[Entry] - Add Entry', payload: data });

      } catch (err) {

         console.log(err);

      };
   
   };

   const updateEntry = async ( { _id, description, status }: Entry ) => {
   
      try {
         
         const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status });

         dispatch({ type: '[Entry] - Entry Updated', payload: data });

      } catch (err) {
         
         console.log({ err });

      };

   };

   const refreshEntries = async () => {
   
      const { data } = await entriesApi<Entry[]>('/entries');

      dispatch({ type: '[Entry] - Refresh Data', payload: data });

   };

   useEffect(() => {
      refreshEntries();
   }, []);

   return (
      <EntriesContext.Provider value={{
         ...state,
         addNewEntry,
         updateEntry
      }} >
         { children }
      </EntriesContext.Provider>
   );

};
