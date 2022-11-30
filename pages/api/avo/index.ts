import { NextApiRequest, NextApiResponse } from "next";
import Database from "../../../database/db";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const allEntries = await Database.getAll()
    const length = allEntries.length

    response.status(200).json({ length, data: allEntries })
}

export default allAvos