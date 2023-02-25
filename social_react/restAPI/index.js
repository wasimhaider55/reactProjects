const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
mongoose.set('strictQuery', false);  // it'll give warning if cann't write 
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");



dotenv.config();
mongoose.connect(process.env.MONGO_URL , 
    (err) => {
    if(err) console.log(err) 
    else console.log("connected to mongoDB");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postsRoute);


app.listen(8844,() => {
    console.log("Backend server is running  ")
})