import { signup } from '@/app/(auth-pages)/actions';
import { FormMessage, Message } from '@/components/form-message';
import Link from 'next/link';
import { FiDollarSign } from 'react-icons/fi';

export default async function LoginPage(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center p-6">
      <div className="mb-6 flex flex-col items-center justify-center">
        <Link className="flex flex-col items-center justify-center" href={'/'}>
          <FiDollarSign className="text-main-blue text-5xl" />
          <h1 className="text-main-blue text-2xl font-semibold">Minance</h1>
        </Link>
        <span className="text-sm text-slate-400">Create your account</span>
      </div>
      <div className="w-full">
        <form action={signup} className="flex flex-col space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="w-1/2">
              <label className="text-sm" htmlFor="fName">
                First name
              </label>
              <input
                type="text"
                name="fName"
                placeholder="John"
                className="focus:ring-main-blue w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:outline-none"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm" htmlFor="lName">
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                placeholder="Doe"
                className="focus:ring-main-blue w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:outline-none"
                required
              />
            </div>
          </div>
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="focus:ring-main-blue w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:outline-none"
            required
          />
          <div className="flex items-center justify-between gap-2">
            <div className="w-1/2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="focus:ring-main-blue w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:outline-none"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm" htmlFor="password">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className="focus:ring-main-blue w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:outline-none"
                required
              />
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Password must be at least 8 characters long
          </p>
          <button
            type="submit"
            className="bg-main-blue hover:bg-main-blue-dark w-full cursor-pointer rounded-md p-2 text-white transition duration-200 ease-in-out"
          >
            Create account
          </button>
        </form>
        <div className="my-4 flex items-center justify-center">
          <Link
            href={'/sign-in'}
            className="text-main-blue text-sm hover:underline"
          >
            Already have an account? Sign in
          </Link>
        </div>
        <FormMessage message={searchParams} />
      </div>
    </div>
  );
}
