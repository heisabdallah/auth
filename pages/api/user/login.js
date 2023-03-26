import connectDB from "../../../server/database/connection";
import { loginUser } from "@/server/database/controller";


export default async function handler(req, res) {

    connectDB().catch(error => console.log(error))

    const { method } = req

    if (method === "POST"){
        await loginUser(req, res)
    }else{
        // res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}