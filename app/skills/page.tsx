import NavBar from "../components/NavBar";
import PageShell from "../components/PageShell";

const skillGroups = [
  {
    title: "Security Engineering",
    items: ["CIS Hardening", "IAM / Least Privilege", "Logging & Auditing", "Incident Response Basics", "Threat Modeling"],
  },
  {
    title: "Detection & Monitoring",
    items: ["SIEM (Wazuh/Elastic/Splunk)", "Sysmon / Windows Events", "Linux auth logs", "Rule writing mindset", "Alert triage"],
  },
  {
    title: "Networking",
    items: ["TCP/IP", "VLANs / ACLs", "IPv6 Basics", "Wireshark", "Zeek (PCAP analysis)"],
  },
  {
    title: "Cloud & Automation",
    items: ["AWS IAM / VPC", "S3 hardening", "Python automation", "Bash scripting", "Ansible basics"],
  },
];

export default function SkillsPage() {
  return (
    <>
      <NavBar />
      <PageShell
        title="Skills"
        subtitle="Real skills mapped to real security engineering work — not buzzwords."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="hud-card p-6">
              <div className="text-xs tracking-[0.28em] text-emerald-200/70">{g.title}</div>
              <ul className="mt-4 grid gap-2 text-sm text-emerald-200/80">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}
