// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import mainRoute from "./mainRoute.js";
// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());


// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // connect to mongoDB
// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch((error) => console.error("MongoDB Connection Error:", error));


// // defining routes
// app.use(mainRoute);

// //Serve static file
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');

const { mainRoute } = require("./App/mainRoute");



const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.use(mainRoute)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Connect to MongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/Panel`)
.then(() => {
    console.log("Connected to MongoDB");
  })
app.listen("8000")
