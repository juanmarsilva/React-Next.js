import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { IPokemon } from '../../../../models/Pokemon';
import PokemonModel from '../../../../models/Pokemon';
import mongoose from 'mongoose';

type Data = 
| { msg: string }
| IPokemon[]
| IPokemon

const handler = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;

    const { method } = req;

    if( !mongoose.isValidObjectId( id ) ) return res.status(400).json( { msg: `${ id } is not a valid ID`} );
    
    if( method === 'DELETE' ) return deletePokemon( req, res );

    if( method === 'PUT' ) return updatePokemon( req, res );


    res.status(400).json({ msg: 'This endpoint does not exist' });
};


const updatePokemon = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;

    await db.connect();

    const pokemon = PokemonModel.findById( id );

    if( !pokemon ) {
        await db.disconnect();
        return res.status(400).json({ msg: `No hay pokemon con dicho ID: ${ id }`})
    };

    const {
        name,
        stats,
        types,
        height,
        weight,
        sprites
    } = req.body;

    try {
        
        const updatePokemon = await PokemonModel.findByIdAndUpdate(id, { name, stats, types, height, weight, sprites }, { runValidators: true, new: true } );

        await db.disconnect();
        
        return res.status(200).json( updatePokemon! );

    } catch ( err ) {
        
        console.log( err );
        
        await db.disconnect();

        return res.status(400).json({ msg: 'Bad Request' });

    } 

};


const deletePokemon = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;

    await db.connect();

    const pokemon = PokemonModel.findById( id );

    if( !pokemon ) {
        await db.disconnect();
        return res.status(400).json({ msg: `No existe pokemon con dicho ID: ${ id }` });
    };

    try {
    
        const pokemon = await PokemonModel.findByIdAndDelete( id );

        await db.disconnect();

        return res.status(200).json({ msg: `El pokemon ${ pokemon?.name } fue removido correctamente`});

    } catch( err ) {
        
        console.log( err );

        await db.disconnect();

        return res.status(400).json({ msg: 'Bad Request' });
    }

};

export default handler;