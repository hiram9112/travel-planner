import { z } from 'zod';

/**
 * Validation schema for user registration.
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
 */
export const loginSchema = z.object({
  email: z
    .string()
    .email('El email no tiene un formato válido'),

  password: z
    .string()
    .min(1, 'La contraseña es obligatoria'),
});
