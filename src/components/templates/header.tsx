"use client";

import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header className="border-b fixed w-full z-10 bg-background">
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          AI Model Playground
        </Link>

        <div className="flex items-center justify-between gap-4">
          {status === "authenticated" && session?.user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {session.user.email}
              </span>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                Sign out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
