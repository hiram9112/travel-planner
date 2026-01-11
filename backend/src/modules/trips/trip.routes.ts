import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware';
import {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  deleteTrip,
} from './trip.controller';

const router = Router();

/**
 * Trips routes
 * All routes are protected and require authentication
 */

// Create a new trip
router.post('/', authMiddleware, createTrip);

// Get all trips for the authenticated user
router.get('/', authMiddleware, getTrips);

// Get a single trip by id (must belong to the user)
router.get('/:id', authMiddleware, getTripById);

// Update a trip by id
router.put('/:id', authMiddleware, updateTrip);

// Delete a trip by id
router.delete('/:id', authMiddleware, deleteTrip);

export default router;
