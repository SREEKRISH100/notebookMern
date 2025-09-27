import express from "express";


import notesRouter from "./routes/noteRouter.js"
const app=express()

app.use("/api/notes",notesRouter)
app.listen(5000,()=>{
    console.log("serevr is rumming on PORT:5000");
})

// mongodb+srv://krishnapvilasan124_db_user:Gm26u8PNvaDy2DA0@cluster0.dwn2fwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0