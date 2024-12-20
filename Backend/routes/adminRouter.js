import express from 'express';
import { addTutor } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';

const adminRouter = express.Router();

adminRouter.post('/add-tutor', upload.single('image'),addTutor)

export default adminRouter;
