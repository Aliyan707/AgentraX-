"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare,
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

const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI Solution",
  "UI/UX Design",
  "Cloud Infrastructure",
  "Digital Strategy",
  "Other",
];

const contactInfo = [
  { Icon: Mail, label: "Email", value: "info@agentrax.net", href: "mailto:info@agentrax.net" },
  { Icon: Phone, label: "Phone", value: "0333 285 8292", href: "tel:+923332858292" },
  { Icon: MapPin, label: "Office", value: "225 Bush Street, San Francisco, CA 94104" },
];

const promises = [
  { Icon: Clock, text: "Response within 24 hours — every time" },
  { Icon: MessageSquare, text: "No sales pressure, just honest conversation" },
  { Icon: CheckCircle2, text: "Free 30-minute discovery call included" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", type: "", budget: "", message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#09090f]">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-800/16 pointer-events-none"
          style={{ filter: "blur(130px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <div className="section-badge mb-6 mx-auto w-fit">Get In Touch</div>
          <h1 className="display-2 text-white mb-5 max-w-2xl mx-auto">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Remarkable</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
            Tell us about your project — we&apos;ll respond with a thoughtful proposal
            within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main grid ─────────────────────────────── */}
      <section className="py-16 pb-24 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* ── Left sidebar ─────────────────────── */}
            <div className="lg:col-span-2 space-y-5 order-2 lg:order-1">
              {/* Contact items */}
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="glass-card border border-white/7 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-purple-400" style={{ width: "1.125rem", height: "1.125rem" }} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-purple-300 transition-colors">{value}</a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Promises */}
              <div className="glass-card border border-white/7 rounded-2xl p-6 space-y-4">
                <p className="text-white font-semibold text-sm">What to expect</p>
                {promises.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-sm">{text}</p>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="glass-card border border-white/7 rounded-2xl p-5">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">Follow us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: XIcon, href: "#", label: "X" },
                    { Icon: LinkedinIcon, href: "https://pk.linkedin.com/company/agentrax", label: "LinkedIn" },
                    { Icon: GithubIcon, href: "#", label: "GitHub" },
                  ].map(({ Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-full glass-card border border-white/8 flex items-center justify-center text-gray-500 hover:text-purple-400 hover:border-purple-500/35 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card border border-white/7 rounded-2xl overflow-hidden">
                <div
                  className="relative h-36 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1a0533 0%, #0d0d24 100%)",
                  }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-purple-600/20"
                    style={{ filter: "blur(20px)" }}
                  />
                  <div className="relative text-center">
                    <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-1.5" />
                    <p className="text-white font-semibold text-sm">San Francisco, CA</p>
                    <p className="text-gray-500 text-xs">Pacific Time (PT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Form ─────────────────────────────── */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="glass-card border border-white/8 rounded-3xl p-5 sm:p-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-2">Message Sent!</h3>
                      <p className="text-gray-400 max-w-xs">
                        Thanks for reaching out. Expect to hear from us within{" "}
                        <span className="text-purple-400">24 hours</span>.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", type: "", budget: "", message: "" }); }}
                      className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-white font-bold text-2xl mb-1">Start a Conversation</h2>
                      <p className="text-gray-500 text-sm">All fields marked * are required.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Name *</label>
                        <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" required className="input-field" />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Email *</label>
                        <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" required className="input-field" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Company</label>
                        <input type="text" name="company" value={form.company} onChange={onChange} placeholder="Your company or startup" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm font-medium mb-2">Project Type *</label>
                        <select name="type" value={form.type} onChange={onChange} required className="input-field">
                          <option value="" disabled>Select a service</option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t} style={{ background: "#0d0d20", color: "#f0eff9" }}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Estimated Budget</label>
                      <select name="budget" value={form.budget} onChange={onChange} className="input-field">
                        <option value="" disabled>Select a budget range</option>
                        {["Under $10K", "$10K–$25K", "$25K–$50K", "$50K–$100K", "$100K+", "Not sure yet"].map((b) => (
                          <option key={b} value={b} style={{ background: "#0d0d20", color: "#f0eff9" }}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">Tell Us About Your Project *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        placeholder="Describe your idea, goals, challenges, and timeline. The more detail, the better our response."
                        required
                        rows={5}
                        className="input-field resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2.5">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending your message…
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-600 text-xs leading-relaxed">
                      By submitting, you agree to our{" "}
                      <Link href="#" className="text-purple-500 hover:text-purple-400 transition-colors">Privacy Policy</Link>.
                      {" "}We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
