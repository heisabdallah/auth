import mongoose from "mongoose"
const URI = process.env.URI

const connectDB = async () => {
    try{
        await mongoose.connect(URI)
        console.log("Connected to DB!");

    }catch(error){
        console.log(error, "Connection to DB Failed!");
    }
    
}

export default connectDB;