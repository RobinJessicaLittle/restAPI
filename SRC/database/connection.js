// node SRC/database/connection.js
// npm init -y
// npm i express
// npm i mongoose
//npm i dotenv

require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    }catch (error){
        console.log(error);
    }
}

connection();