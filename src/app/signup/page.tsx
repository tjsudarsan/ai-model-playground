import { auth } from "@/auth";
import SignUp from "@/components/pages/signup";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const session = await auth();

  if (session && session.user && session.user.id) {
    // Redirect to login page if user is not authenticated
    redirect("/");
  }

  return <SignUp />;
}
