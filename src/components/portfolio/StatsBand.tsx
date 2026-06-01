import { ArrowRight } from "lucide-react";

export function StatsBand() {
  return (
    <section className="px-4 md:px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-card border border-white/5 overflow-hidden">
        <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-primary">
              <span className="w-6 h-px bg-primary" /> Contact
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
              Any Type Of Query<br /> &amp; Discussion.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Open to opportunities, collaborations, and conversations about
              cloud, automation, and infrastructure.
            </p>
            <a
              href="mailto:ayush@ayushsingh.cloud"
              className="mt-4 inline-flex items-center gap-2 text-primary font-mono text-sm border-b border-primary/40 pb-1 hover:border-primary transition"
            >
              <span>ayush@ayushsingh.cloud</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-2 md:border-l md:border-white/5 md:pl-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
              You can&apos;t automate creativity, but the more you automate,
              the more time you free for it.
            </h3>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
              Every pipeline I build is one less manual step between an idea and
              production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
