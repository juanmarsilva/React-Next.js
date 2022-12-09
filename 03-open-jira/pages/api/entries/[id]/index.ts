import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../../database';
import { EntryModel, IEntry } from '../../../../models';

type Data = 
| { msg: string }
| IEntry


const handler = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
    
    const { id } = req.query;
    const { method } = req;

    if( !mongoose.isValidObjectId( id ) ) return res.status(400).json( { msg: `${ id } is not a valid ID`} );

    if( method === 'PUT' ) return updateEntry( req, res );

    return res.status(400).json({ msg: `${ method } does not exist ` });

}

const updateEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { id } = req.query;
    
    await db.connect();

    const entryUpdated = await EntryModel.findById( id );
    
    if( !entryUpdated ) {
        await db.disconnect();
        return res.status(400).json( {msg: `No hay entrada con dicho ID: ${ id }` });
    }
    
    const { 
        description = entryUpdated?.description, 
        status = entryUpdated.status 
    } = req.body;

    try {
        
        const updatedEntry = await EntryModel.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true } );

        await db.disconnect();

        return res.status(200).json( updatedEntry! );

    } catch(err) {
        
        console.log(err);
        await db.disconnect();
        return res.status(400).json({ msg: 'Bad Request' });

    };

};


export default handler;