import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { EntryModel, IEntry } from '../../../models';


type Data = 
    | { msg: string }
    | IEntry[]
    | IEntry

const handler = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { method } = req;

    if( method === 'GET' ) return getEntries( res );

    if( method === 'POST' ) return postEntry( req, res );

    return res.status(400).json({ msg: 'Endpoint no existe'});

}

const getEntries = async ( res: NextApiResponse<Data> ) => {

    await db.connect();

    const entries = await EntryModel.find().sort({ createdAt: 'ascending' });

    await db.disconnect();

    res.status(200).json( entries );
};

const postEntry = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const { description = '' } = req.body;

    const newEntry = new EntryModel({
        description,
        createdAt: Date.now(),
    });

    try {
        
        await db.connect();

        await newEntry.save();

        await db.disconnect();

        return res.status(201).json( newEntry )

    } catch(err) {
        
        await db.disconnect();
        
        console.log(err);

        return res.status(500).json({ msg: 'Algo salio mal, revisar consola del servidor' });

    };
    
};


export default handler;