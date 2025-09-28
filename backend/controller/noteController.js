import Note from "../model/Note.js";
export const  getAllnotes= async (req,res)=>{
    try {
        const notes=await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("errror in gretAllnotes",error)
        res.status(500).json({msessage:"errror in fetching "})
        
    }
}
export const  getAllnotesByid=async(req,res)=>{
    try {
        const note=await Note.findById(req.params.id)
        if(!note)
            return res.status(404).json({Message:"note not found"});
        res.status(200).json(note)
    } catch (error) {
        console.error("errror in gretAllnotes",error)
        res.status(500).json({msessage:"errror in fetching "})
        
    }

}
export const  CreateNotes= async (req,res)=>{
    try {
        const{title,content}=req.body
        console.log(req)
        const newNote=await Note.$where({title,content})
        await newNote.save()
        res.status(200).json({Message:"note created succesfully"})
    } catch (error) {
        console.error("error in creating createNote",error)
        res.status(500).json({msessage:"errror in creating create back end  "})
        
    }
}
export const  updateNode=async(req,res)=>{
    try {
        const {title,constent}=req.body;
    await Note.findByIdAndUpdate(req.params.id,{title,content})
    res.status(200).json({Message:"data is updated succesfully,,"})
    } catch (error) {
        console.error("error in updating notes",error)
        res.status(500).json({msessage:"errror in updating  back end  "})
    }

}
export const  deleteNote=async(req,res)=>{
   try {
    // const {title,constent}=req.body;
    const nodeDeleted= await Note.findByIdAndDelete(req.params.id)
    if(!nodeDeleted)
        return res.status(404).json({Message:"note not found"});
    res.status(200).json({Message:"data is updated succesfully,,"})
   } catch (error) {
    console.error("error in creating deleting notes",error)
        res.status(500).json({msessage:"errror in deleting notes  back end  "})
   }
}
