import { prisma } from '../../prisma/client';

/**
 * Create a new trip for a user
 */
export const createTripService = async (
  userId: string,
  data: {
    title: string;
    startDate: Date;
    endDate: Date;
  }
) => {
  return prisma.trip.create({
    data: {
      title: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      userId,
    },
  });
};

/**
 * Get all trips for a user
 */
export const getTripsService = async (userId: string) => {
  return prisma.trip.findMany({
    where: {
      userId,
    },
    orderBy: {
      startDate: 'asc',
    },
  });
};

/**
 * Get a single trip by id (only if it belongs to the user)
 */
export const getTripByIdService = async (
  userId: string,
  tripId: string
) => {
  return prisma.trip.findFirst({
    where: {
      id: tripId,
      userId,
    },
  });
};

/**
 * Update a trip by id (only if it belongs to the user)
 */
export const updateTripService = async (
  userId: string,
  tripId: string,
  data: {
    title?: string;
    startDate?: Date;
    endDate?: Date;
  }
) => {
  return prisma.trip.updateMany({
    where: {
      id: tripId,
      userId,
    },
    data,
  });
};

/**
 * Delete a trip by id (only if it belongs to the user)
 */
export const deleteTripService = async (
  userId: string,
  tripId: string
) => {
  return prisma.trip.deleteMany({
    where: {
      id: tripId,
      userId,
    },
  });
};
