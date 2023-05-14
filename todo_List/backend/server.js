const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoute = require("./routes/taskRoute");

const app = express();
app.use(express.json());
app.use("/api/task", taskRoute);


app.get("/", (req, res) => {
    res.send("Home Page......");
})


    ;
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on the ${PORT} `);
        })

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
startServer();



