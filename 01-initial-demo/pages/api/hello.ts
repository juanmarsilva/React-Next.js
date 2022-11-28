// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next/types";

// Se puede usar un type o una interface. Si lo vamos a expandir es preferible usar una interface
type Response = {
  name: string;
  lastname: string;
}

// Tipe las request 
export default function handler( req: NextApiRequest, res: NextApiResponse<Response> ) {
  res.status(200).json({ name: 'Juan Martin', lastname: 'Silva' })
}
