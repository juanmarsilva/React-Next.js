import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { EntryModel, IEntry } from '../../../models';

type Data = 
    | { msg: string }
    | IEntry[]

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { method } = req;

    if( method === 'GET' ) return getEntries( res );

    return res.status(400).json({ msg: 'Endpoint no existe'});

}

const getEntries = async ( res: NextApiResponse<Data> ) => {

    await db.connect();

    const entries = await EntryModel.find().sort({ createdAt: 'ascending' });

    await db.disconnect();

    res.status(200).json( entries );
};


export default handler;