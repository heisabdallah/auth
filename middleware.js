import { NextResponse } from "next/server";

const site = "http://abdallahauth.vercel.app"


export default function middleware(req){
    try {
        // const user_token = req.headers[]
        // console.log(user_token);
        
        const verify = req.cookies.get("loggedin")
        const url = req.url
    
        if(!verify && url.includes("/page/")){
            return NextResponse.redirect(`${site}/login`);

        }
    } catch (error) {
        console.log(error);
        
    }
   
}
