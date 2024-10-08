import express from 'express';
import { updateUserProfile, getAllProfile } from '../controller/profileController.js';  // Match the correct export
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();

// Route to update Profile details (PUT)
router.put('/Profile', authenticateToken, updateUserProfile);  // Use the correct function name

// Route to fetch all profiles (GET)
router.get('/Profile', authenticateToken, getAllProfile);

export default router;

