import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  // note: server checks for user session
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold text-primary">
          <Image src="/logo.png" alt="logo" width={144} height={33} />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="text-sm font-bold text-primary"
              >
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              {/* //Bug: solve for id */}
              {/* @ts-expect-error Server Component */}
              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
