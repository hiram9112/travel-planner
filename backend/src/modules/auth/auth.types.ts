/**
 * Authentication domain types.
 * These types are independent from Express and HTTP.
 */

export interface RegisterInput {
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
