import { Request, Response } from 'express';
import {
  createTripService,
  getTripsService,
  getTripByIdService,
  updateTripService,
  deleteTripService,
} from './trip.service';
import {
  createTripSchema,
  updateTripSchema,
} from './trip.schemas';

/**
 * Create a new trip
 */
export const createTrip = async (req: Request, res: Response) => {
  const userId = req.user!.id;

  const parsed = createTripSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      errors: parsed.error.flatten(),
    });
  }

  const trip = await createTripService(userId, parsed.data);

  res.status(201).json(trip);
};

/**
 * Get all trips for the authenticated user
 */
export const getTrips = async (req: Request, res: Response) => {
  const userId = req.user!.id;

  const trips = await getTripsService(userId);

  res.status(200).json(trips);
};

/**
 * Get a single trip by id
 */
export const getTripById = async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const { id } = req.params;

  const trip = await getTripByIdService(userId, id);

  if (!trip) {
    return res.status(404).json({ message: 'Trip not found' });
  }

  res.status(200).json(trip);
};

/**
 * Update a trip by id
 */
export const updateTrip = async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const { id } = req.params;

  const parsed = updateTripSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      errors: parsed.error.flatten(),
    });
  }

  const result = await updateTripService(userId, id, parsed.data);

  if (result.count === 0) {
    return res.status(404).json({ message: 'Trip not found' });
  }

  res.status(200).json({ message: 'Trip updated successfully' });
};

/**
 * Delete a trip by id
 */
export const deleteTrip = async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const { id } = req.params;

  const result = await deleteTripService(userId, id);

  if (result.count === 0) {
    return res.status(404).json({ message: 'Trip not found' });
  }

  res.status(204).send();
};
