import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
   entries: Entry[];
};


interface Props {
   children?: JSX.Element | JSX.Element[];
};


const Entries_INITIAL_STATE: EntriesState = {
   entries: [
      {
         _id: uuidv4(),
         description: "Pendiente: Pariatur magna ut nisi fugiat sunt reprehenderit enim id velit enim laboris cillum.",
         status: 'pending',
         createdAt: Date.now(),
      },
      {
         _id: uuidv4(),
         description: "En progreso: Fugiat aute aliquip esse enim non dolore amet veniam irure et nostrud.",
         status: 'in-progress',
         createdAt: Date.now() - 1000000,
      },
      {
         _id: uuidv4(),
         description: "Completado: Pariatur Lorem aliqua ea et aliqua aliquip exercitation aliquip veniam mollit.",
         status: 'finished',
         createdAt: Date.now() - 100000,
      },
   ],
};


export const EntriesProvider: FC<Props> = ({ children }) => {

   const [ state, dispatch ] = useReducer( entriesReducer, Entries_INITIAL_STATE )


   return (
      <EntriesContext.Provider value={{ ...state, }} >
         { children }
      </EntriesContext.Provider>
   );

};
