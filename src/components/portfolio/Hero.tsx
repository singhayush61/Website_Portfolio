import { useEffect, useState } from "react";
import {
  ArrowRight,
  Instagram,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  Cloud,
  Container,
  GitBranch,
  Workflow,
  Boxes,
  Hammer,
} from "lucide-react";
import profile from "@/assets/profile.jpg";

const navLinks = [
  { href: "#projects", label: "Projects", active: true },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

const marquee = [
  { icon: Cloud, label: "AWS" },
  { icon: Container, label: "Docker" },
  { icon: Boxes, label: "Kubernetes" },
  { icon: Hammer, label: "Terraform" },
  { icon: Workflow, label: "GitHub Actions" },
  { icon: GitBranch, label: "Jenkins" },
];

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative pt-6 md:pt-8 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl">
          {/* Background layers */}
          <div className="absolute inset-0 grid-bg opacity-[0.18] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
          <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-accent/15 blur-3xl" />
          {/* Top diagonal sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_45%,oklch(1_0_0/0.04)_50%,transparent_55%)]" />

          {/* Nav */}
          <div className={`relative z-10 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-7 transition-all ${scrolled ? "opacity-95" : ""}`}>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/30">
                A
                <span className="absolute -inset-0.5 rounded-xl ring-1 ring-primary/40 animate-pulse" />
              </span>
              <span className="hidden sm:block font-mono text-sm text-muted-foreground">
                ayushsingh<span className="text-primary">.cloud</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-1 text-sm bg-white/[0.03] border border-white/5 rounded-full px-1.5 py-1.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    l.active
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-primary text-primary-foreground hover:opacity-90 transition shadow-lg shadow-primary/25"
            >
              Let's talk <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Body */}
          <div className="relative z-10 grid md:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-10 px-6 md:px-10 pb-0 pt-8 md:pt-10 items-end">
            {/* Left: profile */}
            <div className="relative">
              <div className="relative w-full max-w-md aspect-[4/5] mx-auto md:mx-0">
                {/* Animated rings */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-2xl" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />

                <div className="relative h-full rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={profile}
                    alt="Ayush Singh"
                    className="w-full h-full object-cover scale-105 transition-transform duration-[1500ms] hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {/* Top-left chip */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10 text-xs font-mono">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    Available
                  </div>
                  {/* Bottom location chip */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 text-primary" /> India
                  </div>
                </div>

                {/* Floating glass card */}
                <div className="absolute -right-4 md:-right-8 top-1/3 hidden sm:block animate-float">
                  <div className="glass rounded-2xl px-4 py-3 shadow-xl">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Specialty
                    </div>
                    <div className="mt-1 flex items-center gap-2 font-mono text-sm">
                      <Cloud className="w-4 h-4 text-primary" />
                      AWS · Terraform
                    </div>
                  </div>
                </div>

                {/* Name overlay */}
                <div className="absolute left-0 md:-left-2 bottom-4 md:bottom-8 right-0">
                  <h1 className="font-bold tracking-tight leading-[0.92] text-5xl sm:text-6xl md:text-6xl lg:text-7xl drop-shadow-lg">
                    Ayush <br />
                    Singh<span className="text-primary">.</span>
                  </h1>
                  <div className="mt-3 h-1 w-16 bg-primary rounded-full" />
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3">
                {[
                  { Icon: Github, href: "https://github.com/singhayush61", label: "GitHub" },
                  { Icon: Instagram, href: "https://www.instagram.com/singh_ayushh_?igsh=MW9mNHNubHN4Y2xnNQ==", label: "Instagram" },
                  { Icon: Linkedin, href: "http://linkedin.com/in/ayush-singh-dev01", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group grid place-items-center w-10 h-10 rounded-full border border-white/15 text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition"
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                ))}
                <span className="ml-2 text-xs font-mono text-muted-foreground hidden sm:inline">
                  /ayush-singh
                </span>
              </div>
            </div>

            {/* Right: intro */}
            <div className="md:pb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                <Sparkles className="w-3 h-3" /> Introduction
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.6rem] font-semibold leading-[1.15] tracking-tight">
                DevOps Engineer building{" "}
                <span className="text-gradient">cloud infrastructure</span> &amp;{" "}
                <span className="relative inline-block">
                  automation
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 0 100 4 T 200 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/70"
                    />
                  </svg>
                </span>
                , based in India.
              </h2>

              <p className="mt-5 text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
                I design and ship reliable, automated systems on AWS — from
                containerized workloads on Kubernetes to fully-automated CI/CD
                pipelines and infrastructure-as-code.
              </p>

              {/* Mini terminal card */}
              <div className="mt-6 max-w-md rounded-xl border border-white/10 bg-background/40 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-[11px] font-mono text-muted-foreground">
                    ~/ayush
                  </span>
                </div>
                <div className="px-4 py-3 font-mono text-xs leading-relaxed">
                  <div>
                    <span className="text-primary">$</span>{" "}
                    <span className="text-muted-foreground">whoami</span>
                  </div>
                  <div className="text-foreground">→ devops engineer · fresher · automation-first</div>
                  <div className="mt-1">
                    <span className="text-primary">$</span>{" "}
                    <span className="text-muted-foreground">cat skills.txt</span>
                  </div>
                  <div className="text-foreground">→ aws · k8s · terraform · ci/cd</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/25"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-primary/50 hover:bg-white/5 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Marquee tech ticker */}
          <div className="relative z-10 mt-8 border-t border-white/5 bg-white/[0.02] overflow-hidden">
            <div className="flex gap-12 py-4 animate-marquee whitespace-nowrap">
              {[...marquee, ...marquee, ...marquee].map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-muted-foreground font-mono text-sm"
                >
                  <m.icon className="w-4 h-4 text-primary" />
                  {m.label}
                  <span className="text-primary/40 ml-12">/</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
