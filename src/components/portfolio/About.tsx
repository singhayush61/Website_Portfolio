import { GraduationCap, Rocket, Server, Code2 } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Manipal Institute of Technology",
    sub: "2024 — 2026",
    desc: "Pursuing engineering with a focus on cloud computing, distributed systems and infrastructure automation.",
  },
  {
    icon: Server,
    title: "Self-driven DevOps Journey",
    sub: "2024 — Present",
    desc: "Hands-on with AWS, Kubernetes, Terraform and Jenkins through real-world deployment projects.",
  },
  {
    icon: Rocket,
    title: "Open to Opportunities",
    sub: "2026",
    desc: "Actively seeking roles as a DevOps / Cloud / Infrastructure engineer.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="// about" title="About Me" />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="glass rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">whoami</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate DevOps engineer captivated by the art of building reliable,
              automated and scalable systems. I love turning fragile manual workflows
              into resilient, repeatable pipelines that ship code with confidence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Right now I'm sharpening my skills across <span className="text-foreground">AWS</span>,{" "}
              <span className="text-foreground">Kubernetes</span> and{" "}
              <span className="text-foreground">Infrastructure as Code</span> — and
              shipping real projects to learn what production actually feels like.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { n: "10+", l: "Tools" },
                { n: "5+", l: "Projects" },
                { n: "2026", l: "Graduating" },
              ].map((s) => (
                <div key={s.l} className="text-center rounded-xl border border-white/10 py-3">
                  <div className="text-2xl font-bold text-gradient">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <ol className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-white/10 before:to-transparent">
            {timeline.map((t) => (
              <li key={t.title} className="relative pl-14">
                <span className="absolute left-0 top-1 grid place-items-center w-10 h-10 rounded-xl glass text-primary">
                  <t.icon className="w-5 h-5" />
                </span>
                <div className="glass rounded-xl p-5 hover:border-primary/30 transition">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h4 className="font-semibold">{t.title}</h4>
                    <span className="text-xs font-mono text-primary">{t.sub}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-sm text-primary">{eyebrow}</div>
      <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}
