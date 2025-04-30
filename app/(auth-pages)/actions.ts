'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';
import { encodedRedirect } from '@/utils/utils';
import {
  forgotPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
} from './schemas';

export const login = async (formData: FormData) => {
  const supabase = await createClient();

  const raw = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = loginSchema.safeParse(raw);
  if (!result.success) {
    const error = result.error.issues[0].message;
    return encodedRedirect('error', '/sign-in', error);
  }

  const { email, password } = result.data;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return encodedRedirect('error', '/sign-in', error.message);
  }

  revalidatePath('/', 'layout');
  redirect('/');
};

export const signup = async (formData: FormData) => {
  const supabase = await createClient();
  const origin = (await headers()).get('origin');
  const emailRedirectTo = `${origin}/`;

  const raw = {
    fName: formData.get('fName'),
    lName: formData.get('lName'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const result = signupSchema.safeParse(raw);
  if (!result.success) {
    const error = result.error.issues[0].message;
    return encodedRedirect('error', '/sign-up', error);
  }

  const { fName, lName, email, password } = result.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: `${fName} ${lName}` },
      emailRedirectTo: emailRedirectTo,
    },
  });

  if (error) {
    return encodedRedirect('error', '/sign-up', error.message);
  }

  revalidatePath('/', 'layout');
  encodedRedirect(
    'success',
    '/sign-in',
    'Check your email for a link to confirm your account.'
  );
};

export const forgotPassword = async (formData: FormData) => {
  const rawEmail = formData.get('email');
  const supabase = await createClient();
  const origin = (await headers()).get('origin');
  const redirectTo = `${origin}/reset-password`;

  const result = forgotPasswordSchema.safeParse({ email: rawEmail });
  if (!result.success) {
    const error = result.error.issues[0].code;
    return encodedRedirect('error', '/forgot-password', error);
  }

  const { email } = result.data;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: redirectTo,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      'error',
      '/forgot-password',
      'Could not reset password'
    );
  }

  return encodedRedirect(
    'success',
    '/forgot-password',
    'Check your email for a link to reset your password.'
  );
};

export const resetPassword = async (formData: FormData) => {
  const supabase = await createClient();

  const raw = {
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const result = resetPasswordSchema.safeParse(raw);
  if (!result.success) {
    const error = result.error.issues[0].message;
    return encodedRedirect('error', '/reset-password', error);
  }

  const { password } = result.data;

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return encodedRedirect(
      'error',
      '/reset-password',
      'Password update failed'
    );
  }

  redirect('/');
};

export const signOut = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/sign-in');
};
