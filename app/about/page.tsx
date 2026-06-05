import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Zap, ArrowRight, Users, Award, Globe } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AgentraX — our story, mission, team, and the values that drive us to build exceptional digital products.",
};

const timeline = [
  { year: "2019", title: "Founded", description: "Three engineers with a vision: build software the world deserves. Started in a co-working space in San Francisco." },
  { year: "2020", title: "First Enterprise Client", description: "Landed our first Fortune 500 client — a healthcare company needing a platform overhaul. Grew team to 8." },
  { year: "2021", title: "AI Practice Launched", description: "Launched our dedicated AI practice 18 months before the industry pivoted to AI-first. Vision paid off." },
  { year: "2022", title: "100-Client Milestone", description: "Crossed 100 clients across 12 countries. Expanded to New York and London offices." },
  { year: "2023", title: "Series A Partnership", description: "Partnered with leading VCs to fund growth. Doubled team to 40+ specialists across product, design, and engineering." },
  { year: "2024", title: "Award-Winning Work", description: "Named Top AI Agency by TechCrunch and Product Hunt. 300+ products shipped across every major industry." },
  { year: "2025", title: "Today", description: "150+ active clients. $50M+ value delivered. Still the same obsessive focus on quality that we started with." },
];

const values = [
  { icon: Target, title: "Precision Over Speed", description: "We don't rush. Every decision — technical or design — is deliberate and built to last.", gradient: "from-purple-600 to-violet-700" },
  { icon: Eye, title: "Radical Transparency", description: "No black boxes. You always know exactly where your project stands, what it costs, and what's next.", gradient: "from-fuchsia-600 to-purple-600" },
  { icon: Heart, title: "Partnership Mindset", description: "We act like co-founders, not contractors. Your success is our success — we're invested in the outcome.", gradient: "from-violet-600 to-indigo-600" },
  { icon: Zap, title: "Excellence as Default", description: "Good enough isn't in our vocabulary. If we wouldn't be proud to put our name on it, it doesn't ship.", gradient: "from-pink-600 to-fuchsia-600" },
];

const team = [
  { initials: "AK", name: "Alex Kim", role: "CEO & Co-founder", gradient: "from-purple-600 to-violet-600" },
  { initials: "JC", name: "Jordan Chen", role: "CTO & Co-founder", gradient: "from-fuchsia-600 to-purple-600" },
  { initials: "MO", name: "Maya Osei", role: "Head of Design", gradient: "from-violet-600 to-indigo-600" },
  { initials: "RT", name: "Rafi Torres", role: "Head of AI", gradient: "from-pink-600 to-fuchsia-600" },
  { initials: "SL", name: "Sophie Laurent", role: "Head of Product", gradient: "from-indigo-600 to-purple-600" },
  { initials: "DN", name: "Dev Nair", role: "Lead Engineer", gradient: "from-purple-500 to-pink-600" },
];

const aboutTestimonials = [
  {
    name: "James Liu",
    role: "Head of Engineering",
    company: "ShopStream",
    avatar: "JL",
    gradient: "from-pink-600 to-fuchsia-600",
    quote: "I've worked with a dozen agencies. AgentraX is in a different league. Clean code, transparent process, and a design sensibility that is genuinely rare. Our conversion rate doubled after launch.",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "LegalEdge AI",
    avatar: "PS",
    gradient: "from-indigo-600 to-violet-600",
    quote: "We came with a rough idea and left with a fully polished AI-powered SaaS product. They held our hand through every decision without making us feel out of the loop.",
  },
  {
    name: "Tom Becker",
    role: "CTO",
    company: "LogiCore",
    avatar: "TB",
    gradient: "from-purple-500 to-pink-600",
    quote: "Speed, quality, communication — usually you get two of three. With AgentraX you somehow get all three. We shipped a complex logistics platform in 10 weeks.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#09090f]">
        <div
          className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-purple-800/18 pointer-events-none"
          style={{ filter: "blur(120px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="section-badge mb-6">About AgentraX</div>
            <h1 className="display-2 text-white mb-6">
              We&apos;re Not Just Builders —{" "}
              <span className="gradient-text">We&apos;re Your Partners</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Founded in 2019, AgentraX grew from three engineers with impossibly
              high standards into a full-stack agency trusted by startups and
              enterprises alike. We don&apos;t just code — we obsess over every
              pixel, every data flow, every user interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio" className="btn-primary group w-full sm:w-auto justify-center">
                See Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto justify-center">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────── */}
      <StatsSection dark />

      {/* ── Values ────────────────────────────────── */}
      <section className="py-24 bg-[#0b0b18] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-purple-900/15 pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto w-fit">Our DNA</div>
            <h2 className="section-title text-white mb-4">
              Values That Drive{" "}
              <span className="gradient-text">Every Decision</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              These aren&apos;t slogans on a wall. They&apos;re the principles we use to
              make every call, from system architecture to pixel placement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-7 group">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────── */}
      <section className="py-24 bg-[#09090f] relative overflow-hidden">
        <div
          className="absolute left-0 top-1/2 w-[500px] h-[600px] rounded-full bg-purple-900/12 pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-badge mb-5 mx-auto w-fit">Our Journey</div>
            <h2 className="section-title text-white">
              Six Years of Building{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-600 via-purple-500/40 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-8 group">
                  {/* Dot */}
                  <div className="flex-shrink-0 mt-1.5">
                    <div className={`w-[15px] h-[15px] rounded-full border-2 border-purple-500 ${i === timeline.length - 1 ? "bg-purple-500" : "bg-[#09090f]"} group-hover:bg-purple-500 transition-colors`} />
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-purple-400 font-bold text-sm">{item.year}</span>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────── */}
      <section className="py-24 bg-[#0b0b18] relative overflow-hidden">
        <div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-fuchsia-900/10 pointer-events-none"
          style={{ filter: "blur(100px)" }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto w-fit">The Team</div>
            <h2 className="section-title text-white mb-4">
              Meet the People Behind{" "}
              <span className="gradient-text">The Work</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-lg">
              40+ specialists in engineering, design, AI, and product — all under
              one roof, all obsessed with quality.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="card p-5 text-center group cursor-default">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
                <div className="text-white font-semibold text-sm">{member.name}</div>
                <div className="text-gray-500 text-xs mt-0.5 leading-snug">{member.role}</div>
              </div>
            ))}
            {/* +More card */}
            <div className="card p-5 text-center group cursor-default flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-2xl glass-card border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-purple-400 font-semibold text-sm">+34 more</div>
              <div className="text-gray-500 text-xs mt-0.5">specialists</div>
            </div>
          </div>

          {/* Awards strip */}
          <div className="mt-12 glass-card border border-white/7 rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: Award, text: "Top AI Agency 2024 — TechCrunch" },
                { icon: Globe, text: "Best Digital Agency — Product Hunt" },
                { icon: Zap, text: "Fastest Growing Agency — Forbes" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <Icon className="w-4 h-4 text-purple-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── More Testimonials ─────────────────────── */}
      <section className="py-24 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto w-fit">More Success Stories</div>
            <h2 className="section-title text-white">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aboutTestimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work"
        highlight="Together?"
        description="Join 150+ companies that trust AgentraX to build their most important digital products."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="See Our Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
