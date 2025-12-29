// Import Express library
import express from "express";

// Create Express application
const app = express();

// Define server port
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start HTTP server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
