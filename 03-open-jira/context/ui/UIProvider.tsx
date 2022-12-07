import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}


interface Props {
    children?: JSX.Element | JSX.Element[];
}


const UI_INITIAL_STATE: UIState = {
   sideMenuOpen: false,
   isAddingEntry: false,
   isDragging: false,
}


export const UIProvider: FC<Props> = ({ children }) => {

    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

    const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

    const setIsAddingEntry = ( isAdding: boolean ) => dispatch({ type: 'UI - Adding Entry', payload: isAdding });

    const setIsDragging = ( isDragging: boolean ) => dispatch({ type: 'UI - Start Dragging', payload: isDragging })


    return (
       <UIContext.Provider value={{
            ...state,
            closeSideMenu,
            openSideMenu,
            setIsAddingEntry,
            setIsDragging
       }} >
            { children }
       </UIContext.Provider>
    );
};