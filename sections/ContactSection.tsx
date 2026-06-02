"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@agentrax.io" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
  { icon: MapPin, label: "Office", value: "San Francisco, CA 94107" },
];

const socials = [
  { icon: XIcon, label: "X (Twitter)", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: GithubIcon, label: "GitHub", href: "#" },
];

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a1a] overflow-hidden">
      {/* Orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-purple-800/15 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="section-badge mb-5 mx-auto w-fit">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something Amazing</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Left: Info ───────────────────────────────── */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            {/* Contact items */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-2xl p-5 border border-white/8 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 border border-white/8">
              <p className="text-gray-400 text-sm mb-4">Follow our journey</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold text-sm">Response Guaranteed</span>
              </div>
              <p className="text-gray-400 text-sm">
                We reply to every inquiry within{" "}
                <span className="text-purple-400 font-semibold">24 hours</span>
                . No ghosting, no sales pressure — just a real conversation.
              </p>
            </div>
          </div>

          {/* ── Right: Form ──────────────────────────────── */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="glass rounded-3xl p-5 sm:p-8 border border-white/8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-2xl">Message Sent!</h3>
                  <p className="text-gray-400 max-w-xs">
                    Thanks for reaching out. We&apos;ll be in touch within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-purple-400 text-sm hover:text-purple-300 transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Company / Project
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your startup or company name"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your idea, goals, timeline, or any challenges you're facing..."
                      required
                      rows={5}
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-600 text-xs">
                    By submitting, you agree to our{" "}
                    <span className="text-purple-500 cursor-pointer hover:text-purple-400">
                      Privacy Policy
                    </span>
                    . We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
