import { login } from '@/app/(auth-pages)/actions';
import Link from 'next/link';
import { FiDollarSign } from 'react-icons/fi';

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center justify-center p-6">
        <div className="mb-6 flex flex-col items-center justify-center">
          <Link
            className="flex flex-col items-center justify-center"
            href={'/'}
          >
            <FiDollarSign className="text-main-blue text-5xl" />
            <h1 className="text-main-blue text-2xl font-semibold">Minance</h1>
          </Link>
          <span className="text-sm text-slate-400">
            Sign in to your account
          </span>
        </div>
        <div className="w-full">
          <form action={login} className="flex flex-col space-y-4">
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
            <button
              type="submit"
              className="bg-main-blue hover:bg-main-blue-dark w-full cursor-pointer rounded-md p-2 text-white transition duration-200 ease-in-out"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <Link
              href={'/forgot-password'}
              className="text-main-blue text-sm hover:underline"
            >
              Forgot password?
            </Link>
            <Link
              href={'/sign-up'}
              className="text-main-blue text-sm hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
