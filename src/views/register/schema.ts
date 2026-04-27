import type { TFunction } from 'i18next';
import { z } from 'zod';

export const makeRegisterSchema = (t: TFunction) =>
  z
    .object({
      firstName: z.string().trim().min(2, t('auth.errors.nameTooShort')),
      lastName: z.string().trim().min(2, t('auth.errors.nameTooShort')),
      email: z.string().trim().email(t('auth.errors.invalidEmail')),
      password: z.string().min(6, t('auth.errors.passwordTooShort')),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: t('auth.errors.passwordsDoNotMatch'),
    });

export type RegisterFormValues = z.infer<ReturnType<typeof makeRegisterSchema>>;
