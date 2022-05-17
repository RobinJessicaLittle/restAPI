// node SRC/database/connection.js
// npm init -y
// npm i express
// npm i mongoose
//npm i dotenv
//npm i nodemon
// npm i cors

// http://localhost:5001/

require("dotenv").config();
// import { connect } from "mongoose";
const mongoose = require("mongoose")

const connection = async () => {
    try{
        await connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    }catch (error){
        console.log(error);
    }
}

connection();