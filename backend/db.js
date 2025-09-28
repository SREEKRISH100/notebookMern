import mongoose from "mongoose"
const  connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDB connected succeefully..")
    } catch (error) {
        console.error("error in  connecting mongoDB",error)
    }
}
export default connectDB