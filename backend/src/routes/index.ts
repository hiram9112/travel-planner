// Main router that groups application routes
import { Router } from "express";

// Create a router instance to define routes
const router = Router();

// Minimal health check route to verify server is running
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Export router to be mounted in the Express app
export default router;
