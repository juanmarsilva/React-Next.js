import { db } from ".";
import { ProductModel } from "../models";
import { IProduct } from "../interfaces";

interface ProductSlug {
    slug: string;
}


export const getProductsBySlug = async ( slug: string ): Promise<IProduct | null> => {

    try {
        
        await db.connect();

        const product = await ProductModel.findOne({ slug }).lean();

        await db.disconnect();

        if( !product ) return null; 

        return JSON.parse( JSON.stringify( product ));

    } catch( err ) {
        
        console.log( err );

        await db.disconnect();

        return null;

    } 


};

export const getAllProductsSlugs = async (): Promise<ProductSlug[]> => {

    try {
    
        await db.connect();

        const slugs = await ProductModel.find().select('slug -_id').lean();

        await db.disconnect();

        return slugs;

    } catch( err ) {
        
        console.log( err );

        await db.disconnect();

        return [];
    }


};