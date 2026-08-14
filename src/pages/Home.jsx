import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Users,
  Globe2,
  Leaf,
  ShieldCheck,
  FileSearch,
  Clock,
  Sprout,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Send,
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon, YoutubeIcon, InstagramIcon } from "../components/SocialIcons";
import heroGlobe from "../assets/images/hero_globe_sdg.png";
import SectionTitle from "../components/SectionTitle";
import SdgGrid from "../components/SdgGrid";
import ConferenceCard from "../components/ConferenceCard";
import { upcomingConferences } from "../data/conferences";

const trustPoints = [
  { icon: ShieldCheck, title: "Scopus Indexed", desc: "Conferences & Proceedings" },
  { icon: Users, title: "Rigorous Peer Review", desc: "& High Quality Standards" },
  { icon: Globe2, title: "Global Visibility", desc: "& Academic Recognition" },
  { icon: Leaf, title: "Aligned with", desc: "Sustainable Development Goals" },
];

const stats = [
  { icon: Users, value: "500+", label: "International Conferences Hosted" },
  { icon: BookOpen, value: "Scopus Indexed", label: "Proceedings & Journals" },
  { icon: Globe2, value: "10,000+", label: "Authors from 120+ Countries" },
  { icon: ArrowRight, value: "High Impact", label: "Research. Real World Change." },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Quality You Can Trust", desc: "All conferences follow strict peer review and quality evaluation to ensure high academic standards." },
  { icon: FileSearch, title: "Scopus Indexed Publications", desc: "Publish in Scopus indexed proceedings and journals for greater visibility and credibility." },
  { icon: Users, title: "For Authors, By Researchers", desc: "Designed to support authors at every step – from discovery to publication." },
  { icon: Clock, title: "Timely & Efficient Process", desc: "Transparent timeline and smooth process from submission to publication." },
  { icon: Sprout, title: "Sustainable Future Together", desc: "We promote research and innovation that contributes to achieving the UN Sustainable Development Goals." },
];

const bottomFeatures = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "Clear guidelines and transparent communication at every step." },
  { icon: Clock, title: "Timely Publication", desc: "We value your time and ensure timely reviews and publications." },
  { icon: Users, title: "Global Networking", desc: "Connect with researchers, innovators and experts worldwide." },
  { icon: BookOpen, title: "Open to All Disciplines", desc: "From engineering to social sciences, life sciences to arts – all research areas are welcome." },
];

export default function Home() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Innovation Conference Hub | Scopus Indexed Conferences & Proceedings";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "A trusted platform for researchers and innovators to publish in high quality Scopus indexed conferences, proceedings and journals driving sustainable development worldwide."
      );
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-navy-50">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center pt-10 pb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy-900">
              High Quality Conferences.
              <br />
              Scopus Indexed.
              <br />
              <span className="text-brandGreen">Global Impact.</span>
            </h1>
            <p className="mt-5 text-navy-600 text-[15px] leading-relaxed max-w-lg">
              A trusted platform for researchers and innovators to publish in high quality Scopus indexed
              conferences, proceedings and journals driving sustainable development worldwide.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-xl">
              {trustPoints.map((t) => (
                <div key={t.title}>
                  <t.icon className="text-brandGreen mb-2" size={26} />
                  <p className="text-xs font-semibold text-navy-900 leading-snug">{t.title}</p>
                  <p className="text-xs text-navy-500 leading-snug">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/conferences" className="btn-primary">
                <Search size={16} /> Explore Conferences
              </Link>
              <Link to="/conferences" className="btn-secondary">
                <BookOpen size={16} /> Browse Journals & Proceedings
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <img src={heroGlobe} alt="Global network of SDG-aligned research" className="w-full h-auto rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats band */}
      <section className="container-page -mt-2 sm:-mt-6 relative z-10 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy-900 rounded-xl px-6 sm:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-start gap-3">
              <s.icon className="text-brandGreen shrink-0" size={26} />
              <div>
                <p className="text-white font-bold text-lg leading-tight">{s.value}</p>
                <p className="text-navy-200 text-xs mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Why choose */}
      <section className="container-page pb-16">
        <SectionTitle title="Why Choose Innovation Conference Hub?" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-navy-100 rounded-xl p-6 text-center hover:shadow-cardHover transition-shadow"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-navy-50 flex items-center justify-center mb-4">
                <item.icon className="text-navy-700" size={26} />
              </div>
              <h3 className="font-bold text-navy-900 text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SDG strip */}
      <section className="bg-navy-50 py-14">
        <div className="container-page grid lg:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white shadow-card flex items-center justify-center shrink-0">
              <Globe2 className="text-brandGreen" size={36} />
            </div>
            <div>
              <p className="text-brandGreen font-semibold text-sm">Driving Research for a Sustainable World</p>
              <p className="text-navy-700 text-sm mt-1 max-w-sm">
                Our conferences and publications support all 17 Sustainable Development Goals of the United
                Nations.
              </p>
              <Link to="/sdg-impact" className="btn-secondary mt-3 text-xs px-4 py-2">
                Learn More About Our SDG Impact <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <SdgGrid />
        </div>
      </section>

      {/* Upcoming conferences */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8">
          <SectionTitle title="Upcoming Conferences" />
          <Link to="/conferences" className="text-brandGreen font-semibold text-sm flex items-center gap-1 hover:underline">
            View All Conferences <ArrowRight size={15} />
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy-900 text-white items-center justify-center shadow-cardHover hover:bg-navy-700"
          >
            <ChevronLeft size={18} />
          </button>
          <div ref={scrollerRef} className="flex gap-5 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory">
            {upcomingConferences.map((c, i) => (
              <div key={c.id} className="min-w-[280px] sm:min-w-[310px] snap-start">
                <ConferenceCard conference={c} index={i} />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy-900 text-white items-center justify-center shadow-cardHover hover:bg-navy-700"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* Bottom feature band */}
      <section className="bg-navy-900 py-12">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bottomFeatures.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <f.icon className="text-brandGreen shrink-0" size={24} />
              <div>
                <p className="text-white font-semibold text-sm">{f.title}</p>
                <p className="text-navy-200 text-xs mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-navy-800 to-brandGreen-700 py-12">
        <div className="container-page grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-white font-bold text-xl">Be Part of Innovation. Be Part of Impact.</h3>
            <p className="text-navy-100 text-sm mt-2">Share your research. Inspire change. Build a better future.</p>
            <Link to="/associate-conference" className="btn-green mt-4 text-sm">
              Submit Your Paper <Send size={15} />
            </Link>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Stay Updated</p>
            <p className="text-navy-100 text-sm mb-3">Get latest conference updates and important announcements.</p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 min-w-0 rounded-md px-4 py-2.5 text-sm text-navy-900 focus:outline-none"
              />
              <button type="submit" className="btn-green text-sm px-5">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Connect With Us</p>
            <div className="flex gap-3">
              {[LinkedinIcon, TwitterIcon, FacebookIcon, YoutubeIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
