// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Import the configured Express app
import app from "./app";

// Read port from environment variables
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
