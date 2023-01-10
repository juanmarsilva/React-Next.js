import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ShopLayout } from '../../components/layouts';
import { Grid, Box, Typography, Button, Chip } from '@mui/material';
import { ProductSlideshow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { IProduct } from '../../interfaces';
import { dbProducts } from '../../database';

interface Props {
    product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {


    return (
        <ShopLayout title={ product.title } pageDescription={ product.description } >

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
    );
};


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// NO USAR ESTO
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//     const { slug = '' } = params as { slug: string };
    
//     const product = await dbProducts.getProductsBySlug( slug );

//     if( !product ) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     };

//     return {
//         props: {
//             product
//         }
//     }
// }


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const slugs = await dbProducts.getAllProductsSlugs();

    return {
        paths: slugs.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: "blocking"
    };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug = '' } = params as { slug: string };
    
    const product = await dbProducts.getProductsBySlug( slug );

    if( !product ) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    };

    return {
        props: {
            product
        },
        revalidate: 86400,
    };
};

export default ProductPage;