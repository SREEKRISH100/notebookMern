import express from "express"
import { CreateNotes, deleteNote, getAllnotes, updateNode } from "../controller/noteController.js";
const router=express.Router();


router.get("/",getAllnotes);
router.post("/",CreateNotes);
router.put("/id",updateNode);
router.delete("/:id",deleteNote)
export default router;