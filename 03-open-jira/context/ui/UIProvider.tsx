import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}


interface Props {
    children?: JSX.Element | JSX.Element[];
}


const UI_INITIAL_STATE: UIState = {
   sideMenuOpen: false,
   isAddingEntry: false,
}


export const UIProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

    const setIsAddingEntry = ( isAdding: boolean ) => dispatch({ type: 'UI - Adding Entry', payload: isAdding })


    return (
       <UIContext.Provider value={{
            ...state,
            closeSideMenu,
            openSideMenu,
            setIsAddingEntry
       }} >
            { children }
       </UIContext.Provider>
    );
};