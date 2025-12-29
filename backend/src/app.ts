// Import Express framework
import express from "express";

// Import application routes
import routes from "./routes";

// Create Express application instance
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Register application routes
app.use(routes);

// Export app to be started in server.ts
export default app;
