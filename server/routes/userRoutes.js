import express from "express";
import { clerkWebhook, userCredit } from "../controllers/UserControllers.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhook);
userRouter.get("/credits", authUser, userCredit);

export default userRouter;