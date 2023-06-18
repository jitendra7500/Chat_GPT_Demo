const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const chatBoatRoutes = require("./routers/chatBoatRouter");

const PORT = process.env.APP_PORT || 4040;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: process.env.ORIGIN.split(",") || "*"
}));

app.use("/api", chatBoatRoutes);

app.get("/", (req, res) => {
    return res.status(200).send({
        msg: "Api is working......."
    });
});


app.listen(PORT, (error) => {
    if (error) {
        console.log(`Server is not listening on port ${PORT}`, error.message);
    }
    console.log(`Server is listening on port ${PORT}`);
});