import { auth } from "@/auth";
import Playground from "@/components/pages/playground";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    // Redirect to login page if user is not authenticated
    redirect("/login");
  }

  return <Playground />;
}
