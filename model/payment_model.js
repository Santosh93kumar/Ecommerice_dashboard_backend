import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    transaction_no: String,
    customer_name: String,
    product_name: String,
    total_product: Number,
    total_amount: Number,
    status: String,
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;