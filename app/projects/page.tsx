import NavBar from "../components/NavBar";
import PageShell from "../components/PageShell";

const projects = [
  {
    title: "Linux Enterprise Security Hardening",
    stack: "Ubuntu • CIS • auditd • UFW • Fail2Ban • Ansible",
    bullets: ["Hardened baseline using CIS logic", "Central logging + auditing", "Automated with Ansible playbooks"],
  },
  {
    title: "Windows Enterprise Security (AD & IAM)",
    stack: "Windows Server • AD DS • GPO • RBAC",
    bullets: ["Secure AD design & hardening", "GPO policy enforcement", "Least privilege via groups & roles"],
  },
  {
    title: "Enterprise Network Design & Security Capstone",
    stack: "VLANs • ACLs • Routing • Segmentation",
    bullets: ["Network segmentation for blast-radius control", "Access control policies", "Verification & troubleshooting"],
  },
  {
    title: "SIEM Deployment & Detection Engineering",
    stack: "Wazuh / Elastic / Splunk",
    bullets: ["Log ingestion + normalization", "Detection rules mindset", "Dashboards + alert triage workflow"],
  },
  {
    title: "SOC Incident Investigation & Triaging",
    stack: "Triage • Timeline • Evidence",
    bullets: ["Alert → investigation workflow", "Root-cause + containment", "Write clear incident notes"],
  },
  {
    title: "Threat Hunting & Malware Traffic Analysis",
    stack: "PCAP • Zeek • Wireshark",
    bullets: ["DNS/TLS/HTTP behavior hunting", "Indicators + hypothesis-driven hunts", "Write-up like a real analyst"],
  },
  {
    title: "Cloud Security Architecture on AWS",
    stack: "IAM • VPC • S3 • Security Groups",
    bullets: ["Secure IAM patterns", "Network isolation with VPC design", "Hardening storage and access"],
  },
  {
    title: "Vulnerability Management & Patch Program",
    stack: "Nessus / OpenVAS • CVSS",
    bullets: ["Scan → prioritize → remediate", "Risk-based reporting", "Patch verification + retest"],
  },
  {
    title: "Security Automation with Python",
    stack: "Python • SOAR-style scripts",
    bullets: ["Automate repetitive security tasks", "Enrichment scripts", "Cleaner incident response"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <PageShell
        title="Projects"
        subtitle="DR-SSC portfolio projects (enterprise style). Each project is designed to be interview-explainable."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="hud-card p-6">
              <div className="text-lg font-semibold text-emerald-300">{p.title}</div>
              <div className="mt-2 text-xs tracking-[0.22em] text-emerald-200/60">{p.stack}</div>
              <ul className="mt-4 grid gap-2 text-sm text-emerald-200/80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <button className="hud-outline px-4 py-2 text-xs text-emerald-200/80 hover:bg-emerald-400/10">
                  GitHub (add link)
                </button>
                <button className="hud-outline px-4 py-2 text-xs text-emerald-200/80 hover:bg-emerald-400/10">
                  Report (add PDF)
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}
