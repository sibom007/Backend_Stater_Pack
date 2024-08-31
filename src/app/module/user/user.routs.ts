import express from 'express';
import { UserControllers } from './user.contorler';
import validateRequest from "../../middlewares/validateRequest";
const router = express.Router();

router.post("/register", UserControllers.createUser);


export const UserRoutes = router;
