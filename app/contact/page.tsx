import NavBar from "../components/NavBar";
import PageShell from "../components/PageShell";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <PageShell
        title="Contact"
        subtitle="Let’s connect for internships, security engineering roles, and collaborations."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="hud-card p-6">
            <div className="text-xs tracking-[0.28em] text-emerald-200/70">EMAIL</div>
            <div className="mt-3 text-lg text-emerald-200/90">your-email@example.com</div>
            <div className="mt-5 text-sm text-emerald-200/70">
              Replace with your real email + add LinkedIn/GitHub below.
            </div>
          </div>

          <div className="hud-card p-6">
            <div className="text-xs tracking-[0.28em] text-emerald-200/70">SOCIAL</div>
            <div className="mt-4 grid gap-3 text-sm">
              <a className="hud-outline px-4 py-2 hover:bg-emerald-400/10" href="#">
                LinkedIn (add link)
              </a>
              <a className="hud-outline px-4 py-2 hover:bg-emerald-400/10" href="#">
                GitHub (add link)
              </a>
              <a className="hud-outline px-4 py-2 hover:bg-emerald-400/10" href="#">
                Resume PDF (add link)
              </a>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
