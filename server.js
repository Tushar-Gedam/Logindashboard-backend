const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config(); // For environment variables

const app = express();

// Database connection
mongoose.connect("mongodb://localhost:27017/userOperations", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000", // Frontend URL
        credentials: true, // If you need to send cookies or auth headers
    })
);

app.use("/api", userRoutes);

const server = http.createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//tushar
