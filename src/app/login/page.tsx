import { auth } from "@/auth";
import Login from "@/components/pages/login";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session && session.user && session.user.id) {
    // Redirect to login page if user is not authenticated
    redirect("/");
  }

  return <Login />;
}
