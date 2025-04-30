import { z } from 'zod';

const passwordShortError = 'Password must be at least 8 characters long';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, passwordShortError),
});

export const signupSchema = z
  .object({
    fName: z.string().min(1, 'First name is required'),
    lName: z.string().min(1, 'Last name is required'),
    email: z.string().email(),
    password: z.string().min(8, passwordShortError),
    confirmPassword: z.string().min(8, passwordShortError),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, passwordShortError),
    confirmPassword: z.string().min(8, passwordShortError),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });
