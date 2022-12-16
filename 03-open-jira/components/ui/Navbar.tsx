import { useContext } from 'react';
import NextLink from 'next/link';
import { UIContext } from '../../context/ui/UIContext';
import  { AppBar, Toolbar, IconButton, Link } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Typography from '@mui/material/Typography';


export const Navbar = () => {

    const { openSideMenu } = useContext( UIContext );

    return (
        <AppBar position='sticky' >

            <Toolbar>

                <IconButton
                    size='large'
                    edge='start'
                    onClick={ openSideMenu }
                >
                    <MenuOutlinedIcon />
                </IconButton>

                <NextLink href='/' passHref style={{ color: 'white', textDecoration: 'none' }}>
                   
                    <Typography variant='h6' > OpenJira </Typography>
                    
                </NextLink>


            </Toolbar>

        </AppBar>
    );
};
