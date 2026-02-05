import express from "express";
import {
  getUserPreferences,
} from "../controllers/userPreferenceController.js";

const router = express.Router();

/**
 * GET /api/users/:userId/preferences
 */
router.get("/:userId/preferences", getUserPreferences);

export default router;
