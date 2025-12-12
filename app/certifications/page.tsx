import NavBar from "../components/NavBar";
import PageShell from "../components/PageShell";

const certs = [
  { name: "CompTIA Security+", status: "Planned / In Progress" },
  { name: "CompTIA CySA+", status: "Planned / In Progress" },
  { name: "CCNA (Networking)", status: "Learning Track" },
  { name: "CISSP (Long-term)", status: "Future Goal" },
];

export default function CertificationsPage() {
  return (
    <>
      <NavBar />
      <PageShell
        title="Certifications"
        subtitle="Certs are support — projects are proof. Here’s the track."
      >
        <div className="grid gap-4">
          {certs.map((c) => (
            <div key={c.name} className="hud-card p-6 flex items-center justify-between">
              <div className="text-emerald-200/90">{c.name}</div>
              <div className="hud-outline px-3 py-1 text-xs text-emerald-300">{c.status}</div>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}
