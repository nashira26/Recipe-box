import express from "express";
import { filterRecipeSuggestions } from "../controllers/recipeSuggestionController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.get("/filter-suggestions", filterRecipeSuggestions);

export default router;
