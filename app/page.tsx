import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function Home() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user) {
    redirect("/sign-in")
  }
  return (
    <>
      <h1>
        You have been redirected to the new page!! <br /> Hello{" "}
        {data.user.email}!
      </h1>
    </>
  )
}
