import { PrismaClient } from '@prisma/client';
import { RegisterInput } from './auth.types';
import bcrypt from 'bcrypt';


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

  // Hash password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user with hashed password
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
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
