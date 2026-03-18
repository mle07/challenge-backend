import express from "express";
import { getTypescriptVersion } from "../controllers/typescript";

const router = express.Router();

router.get("/typescript", getTypescriptVersion);

export default router;
