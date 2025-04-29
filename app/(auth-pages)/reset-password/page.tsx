import Link from 'next/link';
import { resetPassword } from '../actions';
import { FiDollarSign } from 'react-icons/fi';
import { FormMessage, Message } from '@/components/form-message';

export default async function ResetPassword(props: {
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
        <span className="text-sm text-slate-400">
          Please enter your new password below
        </span>
      </div>
      <div className="mb-4 w-full">
        <form action={resetPassword} className="flex flex-col space-y-4">
          <label className="text-sm" htmlFor="email">
            New password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="focus:ring-main-blue w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:outline-none"
            required
          />
          <label className="text-sm" htmlFor="email">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
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
