import { Github, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./About";

const stack = ["GitHub Actions", "Docker", "Terraform", "AWS EC2", "Bash", "Linux"];
const features = [
  "Complete CI/CD pipeline built with GitHub Actions",
  "Containerized application using Docker",
  "Cloud infrastructure provisioned via Terraform",
  "Automated deployment to AWS EC2",
  "Zero-touch release workflow from commit to production",
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="// projects"
          title="Featured Work"
          desc="Real-world DevOps builds that solve real problems."
        />

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
          {/* Left: project info */}
          <div className="glass rounded-2xl p-7 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-primary" /> Flagship project
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Full CI/CD Pipeline Automation</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              An end-to-end pipeline that takes code from a commit on GitHub to a live
              deployment on AWS EC2 — fully containerized, provisioned with Terraform,
              and orchestrated with GitHub Actions.
            </p>

            <ul className="mt-5 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-3 pt-5 border-t border-white/5">
              <a
                href="https://github.com/singhayush61/devops-project-docker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                <Github className="w-4 h-4" /> View Repo
              </a>
            </div>
          </div>

          {/* Right: mock dashboard */}
          <div className="glass rounded-2xl p-5 flex flex-col">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">pipeline.yml — main</span>
            </div>

            <div className="space-y-2">
              {[
                { name: "checkout", status: "ok", time: "2s" },
                { name: "lint & test", status: "ok", time: "18s" },
                { name: "docker build", status: "ok", time: "42s" },
                { name: "push to registry", status: "ok", time: "11s" },
                { name: "terraform apply", status: "ok", time: "28s" },
                { name: "deploy → ec2", status: "running", time: "—" },
              ].map((step) => (
                <div
                  key={step.name}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5 text-sm">
                    {step.status === "ok" ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    )}
                    <span className="font-mono">{step.name}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 grid grid-cols-3 gap-3 text-center">
              <Stat label="Builds" value="124" />
              <Stat label="Success" value="98%" />
              <Stat label="Avg time" value="1m 42s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/5 py-2.5">
      <div className="text-base font-bold text-gradient">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
