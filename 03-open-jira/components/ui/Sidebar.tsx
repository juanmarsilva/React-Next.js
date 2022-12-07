import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';
import { Drawer, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts' ]

export const Sidebar = () => {

    const { sideMenuOpen, closeSideMenu } = useContext( UIContext );

    return (
        <Drawer
            anchor='left'
            open={ sideMenuOpen }
            onClose={ closeSideMenu } 
        >

            <Box sx={{ width: 250 }}  >

                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant='h4' > Menu </Typography>
                </Box>

                <List>
                    {
                        menuItems.map( (text, index) => (
                            <ListItem button key={ text } >
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon /> }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>   
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map( (text, index) => (
                            <ListItem button key={ text } >
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon /> }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>   
                        ))
                    }
                </List>

            </Box>

        </Drawer>
    );
};
