import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    pname: { type: String, },
    short_description: { type: String},
    long_description: { type: String },
    stock: { type: Number},
    price: { type: Number },
    discount: { type: Number },
    discount_date: { type: Date },
    category: { type: String},
    visibility: { type: String,},
    scheduled_date: { type: Date },  
    images: [{ type: String}],
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;