import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users2,
  BookOpenCheck,
  Globe2,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Info,
  ShieldCheck,
  TrendingUp,
  Sprout,
  FileBadge,
} from "lucide-react";
import conferencesHero from "../assets/images/conferences_hero.png";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";
import ConferenceCard from "../components/ConferenceCard";
import ScopusTable from "../components/ScopusTable";
import { upcomingConferences, pastConferences } from "../data/conferences";
import { proceedings } from "../data/proceedings";

const stats = [
  { icon: CalendarDays, value: "50+", label: "Upcoming Conferences" },
  { icon: Users2, value: "100+", label: "Global Partners & Institutions" },
  { icon: BookOpenCheck, value: "Scopus", label: "Indexed Proceedings" },
  { icon: Globe2, value: "60+", label: "Countries Participated" },
  { icon: Award, value: "100%", label: "Pre-evaluated Conferences" },
];

const whySubmit = [
  { icon: Globe2, label: "Scopus Indexed Proceedings" },
  { icon: ShieldCheck, label: "High Quality Peer Review" },
  { icon: TrendingUp, label: "Global Exposure for Your Research" },
  { icon: Users2, label: "Networking with Experts" },
  { icon: Sprout, label: "Aligned with SDGs" },
  { icon: FileBadge, label: "Digital Certificate & DOI" },
];

function Row({ title, viewAllLabel, children }) {
  const scrollerRef = useRef(null);
  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: "smooth" });
  };
  return (
    <div className="mb-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">{title}</h2>
          <span className="section-title-underline" />
        </div>
        <Link to="#" className="text-brandGreen font-semibold text-sm flex items-center gap-1 hover:underline shrink-0">
          {viewAllLabel} <ArrowRight size={15} />
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
          {children}
        </div>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy-900 text-white items-center justify-center shadow-cardHover hover:bg-navy-700"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function Conferences() {
  useEffect(() => {
    document.title = "Conferences | Scopus Indexed Conferences | Innovation Conference";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore upcoming and past Scopus indexed conferences hosted by Innovation Conferences across engineering, science, health, business and social sciences."
      );
  }, []);

  return (
    <div>
      <div className="container-page pt-6">
        <Breadcrumb items={[{ label: "Conferences" }]} />
      </div>

      <PageHero
        eyebrow=""
        titleLines={[
          { text: "Explore High Quality," },
          { text: "Scopus Indexed Conferences", accent: true },
        ]}
        description="Innovation Conferences hosts and supports only pre-evaluated, high quality conferences with tie-ups to Scopus indexed proceedings and journals, ensuring visibility, credibility and real impact for your research."
        image={conferencesHero}
        imageAlt="Speaker presenting at an international conference"
      />

      {/* Stats */}
      <section className="container-page py-12">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className="text-brandGreen shrink-0" size={26} />
              <div>
                <p className="font-bold text-navy-900 text-sm leading-tight">{s.value}</p>
                <p className="text-xs text-navy-500 leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page">
        <Row title="Upcoming Conferences" viewAllLabel="View All Conferences">
          {upcomingConferences.map((c, i) => (
            <div key={c.id} className="min-w-[260px] sm:min-w-[280px] snap-start">
              <ConferenceCard conference={c} index={i} />
            </div>
          ))}
        </Row>

        <Row title="Previous Conferences" viewAllLabel="View All Past Conferences">
          {pastConferences.map((c, i) => (
            <div key={c.id} className="min-w-[260px] sm:min-w-[280px] snap-start">
              <ConferenceCard conference={c} index={i} />
            </div>
          ))}
        </Row>
      </section>

      {/* Scopus proceedings table */}
      <section className="container-page pb-10">
        <SectionTitle title="Scopus Indexed Proceedings Associated with Our Conferences" center />
        <div className="mt-8">
          <ScopusTable rows={proceedings} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex items-start gap-3 bg-navy-50 border border-navy-100 rounded-lg px-5 py-4 text-sm text-navy-700"
        >
          <Info size={18} className="text-navy-600 shrink-0 mt-0.5" />
          <p>
            All conferences are pre-evaluated based on quality benchmarks, peer review standards and publication
            commitment in Scopus indexed proceedings or Scopus indexed journals.
          </p>
        </motion.div>
      </section>

      {/* Why submit */}
      <section className="bg-navy-900 py-12">
        <div className="container-page">
          <h2 className="text-white text-xl font-bold text-center mb-8">Why Submit to Our Conferences?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {whySubmit.map((w) => (
              <div key={w.label} className="text-center">
                <w.icon className="text-brandGreen mx-auto mb-2" size={26} />
                <p className="text-xs text-navy-100 leading-snug">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
