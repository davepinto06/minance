import { redirect } from "next/navigation"
import { signup } from "../actions"

export default function SignUpPage() {
  const login = () => {
    redirect("/login")
  }

  return (
    <form>
      <legend>Sign up</legend>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signup}>Sign up</button>
    </form>
  )
}
