import express from "express";
import { SectionController } from "../Controllers/SectionController.js";

const router = express.Router();
const sectionController = new SectionController();

router.get("/", (req, res) => sectionController.section1);


export default router