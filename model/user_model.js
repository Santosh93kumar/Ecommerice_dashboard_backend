import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profile_image: { type: String, default: "https://www.pngall.com/wp-content/uploads/5/Profile.png" },
    fname: { type: String, },
    lname: { type: String,  },
    email: { type: String,  },
    dob: { type: Date },
    country: { type: String,},
    phone_no: { type: String },
    address: { type: String,  },
    password: { type: String, },
    store_name: { type: String },
    store_description: { type: String },
    store_email: {type: String},
    weight_unit: { type: String },
    dimension_unit: { type: String },
    timezone: { type: String },
    date_format: { type: String },
    time_format: { type: String },
    payment_details: {
        name_on_card: { type: String },
        card_number: { type: String },
        expiry_date: { type: String },
        cvv: { type: String }
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
