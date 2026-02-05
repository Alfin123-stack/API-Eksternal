import express from "express";
import {
  getTutorialById,
} from "../controllers/tutorialController.js";

const router = express.Router();

/**
 * GET /api/tutorials/:tutorialId
 */
router.get("/:tutorialId", getTutorialById);

export default router;
