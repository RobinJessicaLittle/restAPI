
require("./db/connection");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const cors = require("cors");
const userRouter = require("./user/userRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(cors());
app.use(userRouter);
app.use(movieRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});