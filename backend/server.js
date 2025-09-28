import express from "express";
import dotenv from "dotenv"
import notesRouter from "./routes/noteRouter.js"
import connectDB from "./db.js";

dotenv.config();
const app=express()
const PORT=process.env.PORT || 5000;
connectDB()
app.use(express.json())
app.use("/api/notes",notesRouter)
app.listen(PORT,()=>{
    console.log("serevr is rumming on PORT:5000");
})

