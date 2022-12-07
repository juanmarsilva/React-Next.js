import type { NextPage } from "next"
import { Grid, Card, CardHeader, CardContent } from '@mui/material'
import { Layout } from "../components/layouts";
import { EntryList } from '../components/ui/EntryList';

const HomePage: NextPage = () => {

    return (
        <Layout title='Home - Open Jira' >
            
            <Grid container spacing={ 2 } >

                <Grid item xs={ 12 } sm={ 4 }  >

                    <Card sx={{ height: 'calc(100vh - 100px)' }} >

                        <CardHeader title='Pendientes' />

                        {/* Agregar una nueva entrada */}
                        <EntryList status='pending' />
                        
                    </Card>

                </Grid>

                <Grid item xs={ 12 } sm={ 4 }  >

                    <Card sx={{ height: 'calc(100vh - 100px)' }}>

                        <CardHeader title='En progreso' />
            
                        {/* Agregar una nueva entrada */}
                        <EntryList status='in-progress' />
                        
                    </Card>

                </Grid>

                <Grid item xs={ 12 } sm={ 4 }  >

                    <Card sx={{ height: 'calc(100vh - 100px)' }}>

                        <CardHeader title='Completadas' />

                        {/* Agregar una nueva entrada */}
                        <EntryList status='finished' />
                    
                    </Card>

                </Grid>

            </Grid>

        </Layout>
    );
};

export default HomePage;