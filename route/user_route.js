import express from "express";
import { registerUser } from "../controller/user_controller.js";
import { uploads } from "../middleware/fileUpload.js";


const userRoute = express.Router();

// Route for user registration
userRoute.post("/register",uploads("uploads/").single("profile_image"), registerUser);

export default userRoute;
