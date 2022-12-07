import { PlaylistAddOutlined } from '@mui/icons-material';
import { UIState } from './';

type UIActionType =
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }
| { type: 'UI - Adding Entry', payload: boolean }


export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {

    if( action.type === 'UI - Open Sidebar' ) {
        return {
           ...state,
           sideMenuOpen: true,
        }
    }

    if( action.type === 'UI - Close Sidebar' ) {
        return {
           ...state,
           sideMenuOpen: false,
        }
    }

    if( action.type === 'UI - Adding Entry' ) {
        return {
            ...state,
            isAddingEntry: action.payload,
        }
    }

    return state;
}

