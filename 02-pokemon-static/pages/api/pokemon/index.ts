import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import  { PokemonModel, IPokemon } from '../../../models/';


type Data = 
| { msg: string }
| IPokemon
| IPokemon[]

const handler = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { method } = req;

    if( method === 'GET' ) return getPokemonsOfDb( res );

    if( method === 'POST' ) return createPokemon( req, res );

    res.status(200).json({ msg: 'Endpoint does not exist' });
}

const getPokemonsOfDb = async ( res: NextApiResponse<Data> ) => {

    await db.connect();

    try {

        const pokemons = await PokemonModel.find();

        await db.disconnect();

        return res.status(200).json( pokemons );

    } catch (err) {

        console.log(err);

        await db.disconnect();

        return res.status(400).json({ msg: 'Bad Request' })

    };

};

const createPokemon = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    await db.connect();

    const { name, height, weight, types, stats, sprites } = req.body;

    try {
        
        const newPokemon = new PokemonModel({
            name,
            height,
            weight,
            types,
            stats,
            sprites
        });

        await newPokemon.save();

        await db.disconnect();

        return res.status(201).json( newPokemon );

    } catch ( err ) {
        
        console.log( err );

        await db.disconnect();
        
        return res.status(400).json({ msg: 'Bad Request' })
    };
};

export default handler;