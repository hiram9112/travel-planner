import { PrismaClient } from '@prisma/client';
import { RegisterInput } from './auth.types';

const prisma = new PrismaClient();

/**
 * Register a new user.
 * This function contains the business logic for user registration.
 */
export const registerUser = async (input: RegisterInput) => {
  const { email, password } = input;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  // Create user (password hashing will be added later)
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return user;
};

/**
 * Authenticate an existing user.
 * Logic will be implemented later.
 */
export const loginUser = async () => {
  throw new Error('Login service not implemented');
};
