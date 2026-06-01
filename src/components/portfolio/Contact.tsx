import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import { SectionHeader } from "./About";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_0mr3vgq";
const EMAILJS_TEMPLATE_ID = "template_81its8c";
const EMAILJS_PUBLIC_KEY = "Af_n_azNp3XKgCBBr6yCR";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (form.message.length > 1000) {
      toast.error("Message is too long");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "ayushofficialsv@gmail.com",
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="// contact"
          title="Let's Build Something"
          desc="Got an opportunity, a project, or just want to talk DevOps? Drop a message."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.3fr] gap-6">
          <div className="space-y-4">
            <a href="mailto:ayush@ayushsingh.cloud" className="block glass rounded-xl p-5 hover:border-primary/40 transition group">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary border border-primary/20">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-mono text-sm group-hover:text-primary transition">ayush@ayushsingh.cloud</div>
                </div>
              </div>
            </a>

            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent border border-accent/20">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-mono text-sm">India · Remote-ready</div>
                </div>
              </div>
            </div>

          </div>

          <form onSubmit={submit} className="glass rounded-2xl p-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input
                  type="text"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition"
                />
              </Field>
            </div>
            <Field label="Message">
              <textarea
                value={form.message}
                maxLength={1000}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono text-muted-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
