import { z } from 'zod';

/**
 * Authentication validation schemas.
 * These schemas validate incoming auth payloads (req.body) at runtime.
 * They help ensure controllers/services receive clean, expected data.
 */

/**
 * Validation schema for user registration.
 * Enforces password strength rules at account creation time.
 */
export const registerSchema = z.object({
  email: z
    .string()
    .email('El email no tiene un formato válido'),

  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
    .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
    .regex(/[^A-Za-z0-9]/, 'La contraseña debe contener al menos un carácter especial'),
});

/**
 * Validation schema for user login.
 * Only checks that credentials are present and correctly shaped.
 * It does not enforce password strength rules to avoid blocking existing users
 * if password requirements change in the future.
 */
export const loginSchema = z.object({
  email: z
    .string()
    .email('El email no tiene un formato válido'),

  password: z
    .string()
    .min(1, 'La contraseña es obligatoria'),
});
