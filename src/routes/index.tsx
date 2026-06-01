import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { StatsBand } from "@/components/portfolio/StatsBand";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayush Singh — DevOps Engineer | AWS & Kubernetes" },
      {
        name: "description",
        content:
          "Portfolio of Ayush Singh, a DevOps engineer specializing in AWS, Kubernetes, Docker, Terraform and CI/CD automation.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <StatsBand />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
