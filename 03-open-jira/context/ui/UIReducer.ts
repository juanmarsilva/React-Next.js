import { UIState } from './';

type UIActionType =
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }


export const uiReducer = ( state: UIState, { type }: UIActionType ): UIState => {

    if( type === 'UI - Open Sidebar' ) {
        return {
           ...state,
           sideMenuOpen: true,
        }
    }

    if( type === 'UI - Close Sidebar' ) {
        return {
           ...state,
           sideMenuOpen: false,
        }
    }

    return state;
}

