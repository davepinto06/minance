import Link from 'next/link';
import { forgotPassword } from '../actions';
import { FiDollarSign } from 'react-icons/fi';
import { FormMessage, Message } from '@/components/form-message';

export default async function ForgotPassword(props: {
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
        <span className="text-sm text-slate-400">Reset password</span>
        <Link
          href={'/sign-in'}
          className="text-main-blue text-sm hover:underline"
        >
          Already have an account? Sign in
        </Link>
      </div>
      <div className="mb-4 w-full">
        <form action={forgotPassword} className="flex flex-col space-y-4">
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
          <button
            type="submit"
            className="bg-main-blue hover:bg-main-blue-dark w-full cursor-pointer rounded-md p-2 text-white transition duration-200 ease-in-out"
          >
            Reset password
          </button>
        </form>
      </div>
      <FormMessage message={searchParams} />
    </div>
  );
}
