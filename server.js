const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config(); // Load environment variables

const app = express();

// Check for environment variables
if (!process.env.MONGO_URI) {
	console.error("Error: MONGO_URI not found in environment variables.");
	process.exit(1);
}

// Database connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000", // Frontend URL
		credentials: true, // Allow credentials if needed
	})
);

app.use("/api", userRoutes);

const server = http.createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
