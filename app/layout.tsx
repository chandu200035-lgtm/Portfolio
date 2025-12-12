import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Chandu | Security Engineer",
  description: "Cybersecurity & Cloud Security Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="cyber-bg cyber-noise text-green-400">
        <header className="fixed top-0 w-full z-50 border-b border-green-500/20 bg-black/70 backdrop-blur">
          <nav className="max-w-6xl mx-auto flex justify-between px-6 py-4 text-sm tracking-widest">
            <span className="text-green-500 font-bold">DR-SSC TERMINAL</span>
            <div className="space-x-6">
              <Link href="/">HOME</Link>
              <Link href="/skills">SKILLS</Link>
              <Link href="/projects">PROJECTS</Link>
              <Link href="/certifications">CERTIFICATIONS</Link>
              <Link href="/contact">CONTACT</Link>
            </div>
          </nav>
        </header>

        <main className="pt-32">{children}</main>
      </body>
    </html>
  );
}
