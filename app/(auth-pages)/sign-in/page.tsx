import { login } from "@/app/(auth-pages)/actions"

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button>
        <a href="/sign-up">Sign up</a>
      </button>
    </form>
  )
}
