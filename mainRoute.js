import express from "express";
import  paymentRoute  from "./route/payment_route.js";
import userRoute from "./route/user_route.js";
import productRoute  from "./route/product_route.js";

let mainRoute = express.Router();
mainRoute.use("/payment", paymentRoute);
mainRoute.use("/user", userRoute);
mainRoute.use("/product", productRoute);



export default mainRoute;