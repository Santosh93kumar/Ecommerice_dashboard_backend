import express from "express";
import { newPayment,getPayment } from "../controller/payment_controller.js";

const paymentRoute = express.Router();
paymentRoute.post("/new", newPayment);
paymentRoute.get("/", getPayment);

export default paymentRoute;