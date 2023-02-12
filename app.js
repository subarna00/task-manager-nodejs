const express = require("express");
const tasks = require("./routes/taskRoute");
const notFound = require("./middleware/not-found");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const PORT = 5000;

// middleware
app.use(express.static('./public'))
app.use(express.json());


// routes
app.use("/api/v1/tasks", tasks);
// not found route
app.use(notFound);

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