import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { Grid, Box, Typography, Button, Chip } from '@mui/material';
import { initialData } from '../../database/products';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';

const product = initialData.products[0];

const ProductPage: NextPage = () => {


    return (
        <ShopLayout title={ product.title } pageDescription={ product.description }>

            <Grid container spacing={ 3  }>

                <Grid item xs={ 12 } sm={ 7 } >

                    <ProductSlideshow images={ product.images } /> 

                </Grid>

                <Grid item xs={ 12 } sm={ 5 } >

                    <Box display='flex' flexDirection='column' >

                        {/* Titles */}
                        <Typography variant='h1' component='h1' >{ product.title }</Typography>
                        <Typography variant='subtitle1' component='h2' >${ product.price }</Typography>

                        {/* Cantity */}
                        <Box sx={{ my: 2 }} >
                            <Typography variant='subtitle2' component='h2' > Cantity </Typography>

                            <ItemCounter />

                            <SizeSelector 
                                // selectedSize={ product.sizes[0] }
                                sizes={ product.sizes }
                            />
                        </Box>

                        {/* Add to Cart */}
                        <Button color='secondary' className='circular-btn' >
                            Add to cart
                        </Button>

                        {/* <Chip label='No hay disponibles' color='error' variant='outlined' /> */}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>

                            <Typography variant="subtitle2" > Description </Typography>

                            <Typography variant="body2" > { product.description } </Typography>
                        </Box>
                    </Box>

                </Grid>

            </Grid>

        </ShopLayout>
    )
}

export default ProductPage