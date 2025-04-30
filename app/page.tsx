import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { signOut } from './(auth-pages)/actions';

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    redirect('/sign-in');
  }
  return (
    <>
      <h1>
        You have been redirected to the new page!! <br /> Hello{' '}
        {data.user.user_metadata.display_name}!
        <form action={signOut}>
          <button
            type="submit"
            className="bg-main-blue hover:bg-main-blue-dark rounded-md p-2 text-white transition duration-200 ease-in-out"
          >
            Sign out
          </button>
        </form>
      </h1>
    </>
  );
}
