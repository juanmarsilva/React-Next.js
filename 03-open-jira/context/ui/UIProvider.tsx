import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    sideMenuOpen: boolean;
}


interface Props {
    children?: JSX.Element | JSX.Element[];
}


const UI_INITIAL_STATE: UIState = {
   sideMenuOpen: false,
}


export const UIProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )


    return (
       <UIContext.Provider value={{ sideMenuOpen: false }} >
            { children }
       </UIContext.Provider>
    );
};