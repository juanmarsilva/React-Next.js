import type { NextApiRequest, NextApiResponse } from 'next';


type Data = {
    ok: boolean;
    msg: string | string[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { msg = 'Bad request' } = req.query;

    res.status(400).json({
        ok: false,
        msg,
    });
    
};

export default handler;