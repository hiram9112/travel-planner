import { PrismaClient } from '@prisma/client';
import { RegisterInput } from './auth.types';
import { LoginInput } from './auth.types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



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
 * This function contains the business logic for user login.
 */
export const loginUser = async (input: LoginInput) => {
  const { email, password } = input;

  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Compare password with stored hash
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  
  /**
 * Generate a JWT token for the authenticated user.
 * The token contains the user identifier and is signed using a secret key.
 * It will be used by the client to authenticate subsequent requests.
 */
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  );

  return {
    id: user.id,
    email: user.email,
    token,
  }; 

  
};

