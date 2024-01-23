import express from "express";
import reviewRouter from './review.js';
import { updatedoctor,
    deletedoctor,
    getAllDoctor,
    getSingleDoctor, 
    getDoctorProfile} from "../Controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
const router = express.Router();

// nested route
router.use('/:doctorId/reviews', reviewRouter);


router.get("/:id", getSingleDoctor)
router.get("/", getAllDoctor)
router.put("/:id",authenticate,restrict(['doctor']),  updatedoctor)
router.delete("/:id",authenticate,restrict(['doctor']),  deletedoctor)

router.get('/profile/me', authenticate, restrict(["doctor"]), getDoctorProfile)
export default router;