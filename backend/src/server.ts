// Import configured app
import app from "./app";

// Server port (temporarily fixed)
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
