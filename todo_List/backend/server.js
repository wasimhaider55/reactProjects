const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Home Page......");
})


;
const PORT = process.env.PORT || 5000;

app.post("/api/task", async (req,res) => {
    console.log(req.body);
    res.send("task created");

})

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



