import { z } from 'zod';

export const formSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters'),
  })
  .superRefine((data, ctx) => {
    // Rule 1: password === confirmPassword
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords must match',
        path: ['confirmPassword'], // attaches error to confirmPassword field
      });
    }

    // Rule 2: email must be company domain
    if (!data.email.endsWith('@company.com')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Email must be a company email',
        path: ['email'],
      });
    }

    // Rule 3: password should not contain email
    if (data.password.includes(data.email)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password should not contain your email',
        path: ['password'],
      });
    }
  });