const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://wasimhaider:wasimhaider@wasimhaidercluster.bcrb4o4.mongodb.net/taskManager?retryWrites=true&w=majority`)
        console.log("mongoDB is connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;




