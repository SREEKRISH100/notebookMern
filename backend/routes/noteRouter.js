import express from "express"
import { CreateNotes, deleteNote, getAllnotes, getAllnotesByid, updateNode } from "../controller/noteController.js";
const router=express.Router();


router.get("/",getAllnotes);
router.get("/:id",getAllnotesByid);
router.post("/",CreateNotes);
router.put("/:id",updateNode);
router.delete("/:id",deleteNote)
export default router;