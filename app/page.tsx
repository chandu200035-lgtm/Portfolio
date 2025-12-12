import NavBar from "./components/NavBar";
import TerminalText from "./components/TerminalText";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <>
      <NavBar />

      <PageWrapper>
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
          <div className="hud-card glow p-7 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="text-xs tracking-[0.28em] text-emerald-200/70">$ whoami</div>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-emerald-300 md:text-6xl">
                  Chandu
                </h1>
                <p className="mt-3 text-lg text-emerald-200/75 md:text-xl">
                  Security Engineer / Cloud Security Engineer
                </p>

                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/5 px-5 py-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span className="text-sm text-emerald-200/80">
                    Initializing secure connection... <span className="text-emerald-300">[OK]</span>
                  </span>
                </div>

                <div className="mt-10 hud-card p-6">
                  <div className="mb-3 text-xs tracking-[0.28em] text-emerald-200/70">
                    SYSTEM BRIEF
                  </div>
                  <TerminalText
                    speed={14}
                    lines={[
                      "Role: Security Engineer (DR-SSC Program)",
                      "Focus: Hardening • Detection • Cloud Security • Automation",
                      "Tools: Linux • AD/GPO • SIEM • Wireshark/Zeek • AWS • Python",
                      "",
                      "Mission: Build enterprise-grade security projects & ship them as proof.",
                    ]}
                    className="text-sm text-emerald-200/80"
                  />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="hud-card p-6">
                  <div className="text-xs tracking-[0.28em] text-emerald-200/70">STATUS</div>
                  <div className="mt-4 grid gap-3">
                    {[
                      ["Portfolio Mode", "ONLINE"],
                      ["Projects", "9 Core"],
                      ["Goal", "Security Engineer"],
                      ["Build", "DR-SSC"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between">
                        <div className="text-sm text-emerald-200/70">{k}</div>
                        <div className="hud-outline px-3 py-1 text-xs text-emerald-300">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hud-card p-6">
                  <div className="text-xs tracking-[0.28em] text-emerald-200/70">QUICK LINKS</div>
                  <div className="mt-4 grid gap-3 text-sm">
                    <a className="hud-outline px-4 py-2 hover:bg-emerald-400/10" href="/projects">
                      → View Projects
                    </a>
                    <a className="hud-outline px-4 py-2 hover:bg-emerald-400/10" href="/skills">
                      → View Skills
                    </a>
                    <a className="hud-outline px-4 py-2 hover:bg-emerald-400/10" href="/contact">
                      → Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
}
