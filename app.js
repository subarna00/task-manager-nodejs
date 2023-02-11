const express = require("express");
const tasks = require("./routes/taskRoute");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const PORT = 5000;

// middleware
app.use(express.static('./public'))
app.use(express.json());


// routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`served on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();