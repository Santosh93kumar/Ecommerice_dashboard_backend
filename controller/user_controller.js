import User from "../model/user_model.js";

export const registerUser = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    let {
        fname,
        lname,
        email,
        dob,
        country,
        phone_no,
        address,
        password,
        store_name,
        store_description,
        store_email,
        weight_unit,
        dimension_unit,
        timezone,
        date_format,
        time_format,
        payment_details,
    } = req.body;

    let userData = {
        profile_image: req.file ? req.file.path : "https://www.pngall.com/wp-content/uploads/5/Profile.png",
        fname,
        lname,
        email,
        dob,
        country,
        phone_no,
        address,
        password,
        store_name,
        store_description,
        store_email,
        weight_unit,
        dimension_unit,
        timezone,
        date_format,
        time_format,
        payment_details,
    };

    try {
        // Check if the email already exists
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                status: 0,
                msg: "Email already in use. Please use a different email.",
            });
        }

        //  Create a new user if the email is not in use
        let newUser = new User(userData);
        let savedUser = await newUser.save();
        console.log("User registered successfully:", savedUser);

        res.status(201).json({
            status: 1,
            msg: "User registered successfully.",
            user: savedUser,
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({
            status: 0,
            msg: "Error occurred while registering user.",
        });
    }
};
