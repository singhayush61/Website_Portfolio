import { Briefcase, Award, Sparkles } from "lucide-react";
import { SectionHeader } from "./About";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="// experience" title="Open to Opportunities" />

        <div className="mt-12 grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-400/10 text-green-300 border border-green-400/20 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Actively looking
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl font-bold">
                Ready to join a team that ships.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Currently seeking full-time roles as a{" "}
                <span className="text-foreground">DevOps Engineer</span>,{" "}
                <span className="text-foreground">Cloud Engineer</span>, or{" "}
                <span className="text-foreground">Infrastructure Automation Engineer</span>.
                I'm eager to contribute, learn from senior engineers, and help teams
                deploy faster and safer.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Remote", "Hybrid", "Full-time", "Internship"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/15 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow"
              >
                <Briefcase className="w-4 h-4" /> Let's talk
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Certifications</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Working towards industry credentials.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { name: "AWS Certified Cloud Practitioner", status: "Certified", href: "https://www.credly.com/badges/5aa312a2-e7e7-4e99-9042-f81b86c92eb9/public_url" },
                  { name: "AWS Certified Solutions Architect — Associate", status: "Planned" },
                  { name: "Terraform Associate", status: "Certified", href: "https://www.credly.com/badges/9f798aa6-09ed-49c0-86f6-892fe0b3f8da/public_url" },
                ].map((c) => (
                  <li key={c.name} className="flex items-center justify-between rounded-lg border border-dashed border-white/10 px-3 py-2.5">
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-primary transition">
                        {c.name}
                      </a>
                    ) : (
                      <span className="font-mono text-xs">{c.name}</span>
                    )}
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">What I bring</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Strong fundamentals, an automation-first mindset, and a habit of
                documenting everything I build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
