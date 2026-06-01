import { Terminal } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono font-semibold">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/15 text-primary border border-primary/30">
            <Terminal className="w-4 h-4" />
          </span>
          ayush<span className="text-primary">.dev</span>
        </a>
        <ul className="flex flex-wrap gap-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-1.5 rounded hover:text-primary transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Ayush Singh. Built with care.
        </p>
      </div>
    </footer>
  );
}
