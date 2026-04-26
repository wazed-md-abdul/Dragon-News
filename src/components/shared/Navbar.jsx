"use client";

import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  return (
    <div className="container mx-auto mt-6 px-4">
      <div className="surface-panel reveal-up flex flex-col gap-4 rounded-[28px] px-4 py-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2563eb,#60a5fa)] text-lg font-bold text-white shadow-[0_18px_34px_rgba(37,99,235,0.28)]">
            NJ
          </div>
          <div>
            <p className="section-kicker">Newsroom</p>
            <h2 className="editorial-heading mt-2 text-lg font-bold text-slate-900">
              Your daily brief
            </h2>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>
        </ul>

        {isPending ? (
          <span className="loading loading-spinner loading-lg self-center text-blue-600"></span>
        ) : user ? (
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-slate-900/[0.035] px-2 py-2">
            <div className="text-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Signed in
              </p>
              <h2 className="font-semibold text-slate-800">Hello, {user.name}</h2>
            </div>
            <Image
              src={user.image || userAvatar}
              alt="User avatar"
              width={48}
              height={48}
              unoptimized
              className="h-12 w-12 rounded-full object-cover ring-4 ring-white"
            />
            <button
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
