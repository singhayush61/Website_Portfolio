import { SectionHeader } from "./About";
import {
  Cloud, Server, Database, Shield, Network, Boxes, Container, Ship,
  Hammer, Workflow, GitBranch, Settings, BarChart3, Lock, Repeat, HardDrive,
} from "lucide-react";

type Skill = { name: string; level: number; icon: React.ComponentType<{ className?: string }> };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Cloud / AWS",
    skills: [
      { name: "AWS", level: 85, icon: Cloud },
      { name: "Amazon EC2", level: 85, icon: Server },
      { name: "Amazon S3", level: 88, icon: HardDrive },
      { name: "Amazon RDS", level: 75, icon: Database },
      { name: "AWS IAM", level: 80, icon: Shield },
      { name: "Amazon VPC", level: 75, icon: Network },
      { name: "Amazon EKS", level: 70, icon: Boxes },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", level: 88, icon: Container },
      { name: "Docker Hub", level: 85, icon: Ship },
      { name: "Kubernetes", level: 78, icon: Boxes },
    ],
  },
  {
    title: "IaC & Automation",
    skills: [
      { name: "Terraform", level: 82, icon: Hammer },
      { name: "Ansible", level: 72, icon: Settings },
    ],
  },
  {
    title: "CI/CD & SCM",
    skills: [
      { name: "GitHub Actions", level: 88, icon: Workflow },
      { name: "Jenkins", level: 78, icon: Repeat },
      { name: "Git", level: 90, icon: GitBranch },
      { name: "CI/CD Pipelines", level: 85, icon: Workflow },
    ],
  },
  {
    title: "Monitoring & Security",
    skills: [
      { name: "Grafana", level: 75, icon: BarChart3 },
      { name: "AES", level: 70, icon: Lock },
    ],
  },
];

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <div
      className="glass rounded-xl p-4 hover:border-primary/40 hover:-translate-y-1 transition-all group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2.5">
        <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition">
          <skill.icon className="w-4 h-4" />
        </span>
        <span className="font-medium text-sm">{skill.name}</span>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="// skills"
          title="Tech Stack"
          desc="The tools I use to design, automate and ship cloud-native infrastructure."
        />

        <div className="mt-12 space-y-10">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((s, i) => (
                  <SkillCard key={s.name} skill={s} delay={i * 60} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
