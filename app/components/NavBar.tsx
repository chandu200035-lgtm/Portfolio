"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/skills", label: "SKILLS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/certifications", label: "CERTIFICATIONS" },
  { href: "/contact", label: "CONTACT" },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-6">
      <div className="hud-card glow flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <div className="text-sm tracking-[0.22em] text-emerald-200/90">
            DR-SSC TERMINAL
          </div>
        </div>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-xs tracking-[0.26em] transition",
                  active ? "text-emerald-300" : "text-emerald-200/70 hover:text-emerald-200",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
