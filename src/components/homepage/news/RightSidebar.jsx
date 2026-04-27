"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaArrowRight, FaBriefcase, FaGithub, FaGoogle, FaRegNewspaper } from "react-icons/fa";

const spotlightSections = [
  {
    href: "/about-us",
    tag: "About",
    title: "Meet the NewsJournal desk",
    description: "See the mission, values, and editorial rhythm behind every headline.",
    icon: FaRegNewspaper,
    accent: "from-sky-500/20 via-white/80 to-cyan-400/10",
  },
  {
    href: "/career",
    tag: "Career",
    title: "Shape the next edition",
    description: "Explore the teams, culture, and roles growing the product and newsroom.",
    icon: FaBriefcase,
    accent: "from-amber-400/20 via-white/80 to-rose-400/10",
  },
];


const RightSidebar = () => {

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignin = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div className="space-y-5">
      <div className="surface-panel hover-lift reveal-up rounded-[30px] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Quick access</p>
            <h2 className="mt-3 text-lg font-semibold text-slate-900">Login with</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Use your favorite account to personalize the reading desk.
            </p>
          </div>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Live
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <button
            className="group flex w-full items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(59,130,246,0.12)]"
            onClick={handleGoogleSignin}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,rgba(66,133,244,0.12),rgba(234,67,53,0.12),rgba(251,188,5,0.12))] text-lg text-[#4285f4]">
              <FaGoogle />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-slate-800">
                Continue with Google
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                Clean Google-inspired styling with one-tap access
              </span>
            </span>
            <FaArrowRight className="text-sm text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
          </button>

          <button
            className="group flex w-full items-center gap-3 rounded-[24px] border border-slate-800 bg-slate-900 px-4 py-3 text-left text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_20px_44px_rgba(15,23,42,0.22)]"
            onClick={handleGithubSignin}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-lg">
              <FaGithub />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold">Continue with GitHub</span>
              <span className="mt-1 block text-xs text-slate-300">
                Great for builders, contributors, and editor accounts
              </span>
            </span>
            <FaArrowRight className="text-sm text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </button>
        </div>
      </div>

      {spotlightSections.map(({ href, tag, title, description, icon: Icon, accent }, index) => (
        <Link
          key={href}
          href={href}
          className="group block reveal-up"
          style={{ animationDelay: `${(index + 1) * 140}ms` }}
        >
          <div className="surface-panel hover-lift rounded-[30px] p-5">
            <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {tag}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white shadow-[0_18px_34px_rgba(15,23,42,0.18)]">
                  <Icon />
                </span>
              </div>

              <h3 className="editorial-heading mt-5 text-2xl font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                Explore
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RightSidebar;
