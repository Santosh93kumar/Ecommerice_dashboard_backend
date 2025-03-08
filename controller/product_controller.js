import Product from "../model/product_model.js";

export const newProduct = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    let {
        pname,
        short_description,
        long_description,
        stock,
        price,
        discount,
        discount_date,
        category,
        visibility,
        scheduled_date,
        images,
    } = req.body;

    let productData = {
        pname,
        short_description,
        long_description,
        stock,
        price,
        discount,
        discount_date,
        category,
        visibility,
        scheduled_date,
        images,
    };

    if (req.files && req.files.length > 0) {
        productData.images = req.files.map(file => file.filename);
    }

    let resObj;

    try {
        let newProduct = new Product(productData);
        let saveProduct = await newProduct.save();
        console.log("Product registered successfully:", saveProduct);

        resObj = {
            status: 1,
            msg: "Product registered successfully.",
            product: saveProduct,
        };
        res.send(resObj);
    } catch (error) {
        console.error("Error saving product details:", error);
        resObj = {
            status: 0,
            msg: "Error occurred while saving product details.",
        };
        res.send(resObj);
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ status: 1, products: products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ status: 0, msg: "Internal server error" });
    }
};