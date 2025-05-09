import { createClient } from '@/utils/supabase/server';
import { EmailOtpType } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const token = requestUrl.searchParams.get('token_hash');
  const type = requestUrl.searchParams.get('type');
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
  const redirectTo =
    requestUrl.searchParams.get('redirect_to')?.toString() ?? '/';

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/sign-in`);
  }

  if (type === 'signup') {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.verifyOtp({
      token_hash: token,
      type: 'signup' as EmailOtpType,
    });
    if (error || !data.session) {
      return NextResponse.redirect(`${SITE_URL}/sign-in`);
    }
    return NextResponse.redirect(redirectTo || `${SITE_URL}/`);
  }

  if (type === 'recovery') {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.verifyOtp({
      token_hash: token,
      type: 'recovery' as EmailOtpType,
    });
    if (error || !data.session) {
      return NextResponse.redirect(`${SITE_URL}/forgot-password`);
    }
    return NextResponse.redirect(redirectTo || `${SITE_URL}/`);
  }
}
