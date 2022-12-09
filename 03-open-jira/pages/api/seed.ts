import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedData } from '../../database';
import { EntryModel } from '../../models';

type Data = {
    msg: string
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    if( process.env.NODE_ENV === 'production' ) {
        return res.status(401).json({ msg: 'No tiene acceso a este servicio' });
    }

    await db.connect();

    //! WARNING: deleteMany() delete all db info.
    await EntryModel.deleteMany();
    await EntryModel.insertMany( seedData.entries );  


    await db.disconnect();

    res.status(200).json({ msg: "Process executed successfully" });
    
};

export default handler;