import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    msg?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    console.log( req.cookies );
    
    res.status(200).json({ ...req.cookies })
}