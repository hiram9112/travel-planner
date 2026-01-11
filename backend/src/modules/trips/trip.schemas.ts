import { z } from 'zod';

/**
 * Schema to validate trip creation
 */
export const createTripSchema = z
  .object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(50, 'Title is too long'),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  })
  .refine(
    (data) => data.startDate < data.endDate,
    {
      message: 'Start date must be before end date',
      path: ['endDate'],
    }
  );

/**
 * Schema to validate trip update
 * All fields are optional, but at least one must be provided
 */
export const updateTripSchema = z
  .object({
    title: z.string().min(1).max(100).optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
  })
  .refine(
    (data) =>
      data.startDate === undefined ||
      data.endDate === undefined ||
      data.startDate < data.endDate,
    {
      message: 'Start date must be before end date',
      path: ['endDate'],
    }
  );
