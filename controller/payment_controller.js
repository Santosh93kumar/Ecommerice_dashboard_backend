import Payment from "../model/payment_model.js";


export const newPayment = async (req, res) => {
  const {
    transaction_no,
    customer_name,
    product_name,
    total_product,
    total_amount,
    status,
  } = req.body;

  try {
    const newPayment = new Payment({
      transaction_no,
      customer_name,
      product_name,
      total_product,
      total_amount,
      status,
    });
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    console.log("Error: ", error);
  }
};


export const getPayment = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.log("Error: ",error);
    res.status(500).json(error);
  }
};