import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileBadge,
  Globe2,
  Info,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users2,
} from "lucide-react";

import confBg from "../assets/img/confBg.png";
import ConferenceCard from "../components/ConferenceCard";
import ScopusTable from "../components/ScopusTable";
import { upcomingConferences, pastConferences } from "../data/conferences";
import { proceedings } from "../data/proceedings";

import cardSingapore from "../assets/images/card_singapore.png";
import cardDubai from "../assets/images/card_dubai.png";
import cardBangkok from "../assets/images/card_bangkok.png";
import cardPerth from "../assets/images/card_perth.png";

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

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

function ConferenceRow({ title, viewAllLabel, children }) {
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector("[data-conference-slide]");
    const distance = card ? card.offsetWidth + 20 : 300;

    scroller.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      {...reveal}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-10"
    >
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[19px] font-[550] text-[#082b5c] sm:text-[22px]">
            {title}
          </h2>
          <span className="mt-1.5 block h-[2px] w-9 bg-[#55a63c]" />
        </div>

        <Link
          to="#"
          className="group flex shrink-0 items-center gap-2 text-[10px] font-semibold text-[#3f8d2d] transition hover:text-[#082b5c] sm:text-[11px]"
        >
          <span className="hidden min-[380px]:inline">{viewAllLabel}</span>
          <span className="min-[380px]:hidden">View All</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Scroll ${title} left`}
          className="absolute left-1 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#082f63] text-white shadow-[0_5px_14px_rgba(8,47,99,.25)] transition duration-300 hover:scale-110 hover:bg-[#4b9d34] sm:-left-4 lg:-left-9"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
        >
          {children}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Scroll ${title} right`}
          className="absolute right-1 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-[#082f63] text-white shadow-[0_5px_14px_rgba(8,47,99,.25)] transition duration-300 hover:scale-110 hover:bg-[#4b9d34] sm:-right-4 lg:-right-9"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.section>
  );
}

export default function Conferences() {
  useEffect(() => {
    document.title =
      "Conferences | Scopus Indexed Conferences | Innovation Conference";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore upcoming and past Scopus indexed conferences hosted by Innovation Conferences across engineering, science, health, business and social sciences."
      );
    }
  }, []);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#082b5c]">
      {/* ==================== HERO SECTION ==================== */}
      <section className="px-3  sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto min-h-[300px] w-full max-w-[1440px] overflow-hidden rounded-[14px] bg-[#042d5c] bg-cover bg-center sm:min-h-[275px] lg:min-h-[260px]"
          style={{
            backgroundImage: `url(${confBg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Keeps the text readable on small screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#032d5d]/95 via-[#063767]/80 to-[#042d5c]/20 sm:via-[#063767]/55 lg:via-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[300px] max-w-[1320px] items-center px-6 py-9 sm:min-h-[275px] sm:px-10 lg:min-h-[260px] lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="max-w-[610px]"
            >
              <h1 className="text-[29px] font-[600] leading-[1.15] tracking-[-0.02em] text-white min-[400px]:text-[32px] sm:text-[32px] lg:text-[34px]">
                Explore High Quality,
                <span className="mt-1 block text-[#7eb43c]">
                  Scopus Indexed Conferences
                </span>
              </h1>

              <p className="mt-5 max-w-[520px] text-[12px] leading-[1.75] text-white/95 min-[400px]:text-[12px] sm:text-[13px]">
                Innovation Conferences hosts and supports only pre-evaluated,
                high quality conferences with tie-ups to Scopus indexed
                proceedings and journals, ensuring visibility, credibility and
                real impact for your research.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ==================== STATISTICS ==================== */}
      <section className="mx-auto max-w-[1320px] px-4 py-4 sm:px-8 sm:py-4 lg:px-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-[0_5px_18px_rgba(8,43,92,.05)] min-[430px]:grid-cols-2 lg:grid-cols-5 lg:border-0 lg:shadow-none">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              {...reveal}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className={`flex min-h-[88px] items-center gap-4 border-b border-[#dbe3e8] px-10 py-4 min-[430px]:border-r lg:min-h-[75px] lg:border-b-0 lg:px-7 ${
                index === 1 || index === 3 ? "min-[430px]:border-r-0 lg:border-r" : ""
              } ${index >= 3 ? "min-[430px]:border-b-0" : ""} ${
                index === stats.length - 1
                  ? "border-b-0 min-[430px]:col-span-2 min-[430px]:justify-center min-[430px]:border-r-0 lg:col-span-1 lg:justify-start"
                  : ""
              }`}
            >
              <Icon
                size={45}
                strokeWidth={1.35}
                className="shrink-0 text-[#4a9c36]"
              />

              <div>
                <p className="text-[21px] font-[550] leading-tight text-[#082b5c]">
                  {value}
                </p>
                <p className="mt-1 max-w-[135px] text-[12px] leading-[1.35] text-[#243b5b]">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== CONFERENCE CAROUSELS ==================== */}
      <section className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-10">
        <ConferenceRow
          title="Upcoming Conferences"
          viewAllLabel="View All Conferences"
        >
          {upcomingConferences.map((conference, index) => (
            <motion.div
              data-conference-slide
              key={conference.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="min-w-[calc(100%-12px)] snap-start min-[520px]:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] xl:min-w-[calc(25%-15px)]"
            >
              {/* ConferenceCard keeps the existing details-page link */}
              <ConferenceCard conference={conference} index={index} />
            </motion.div>
          ))}
        </ConferenceRow>

        <ConferenceRow
          title="Previous Conferences"
          viewAllLabel="View All Past Conferences"
        >
          {pastConferences.map((conference, index) => (
            <motion.div
              data-conference-slide
              key={conference.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="min-w-[calc(100%-12px)] snap-start min-[520px]:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] xl:min-w-[calc(25%-15px)]"
            >
              {/* ConferenceCard keeps the existing details-page link */}
              <ConferenceCard conference={conference} index={index} />
            </motion.div>
          ))}
        </ConferenceRow>
      </section>

      {/* ==================== SCOPUS PROCEEDINGS ==================== */}
      <motion.section
        {...reveal}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-[1320px] px-4 pb-7 sm:px-8 lg:px-10"
      >
        <div className="mb-6 text-center">
          <h2 className="text-[19px] font-[550] leading-snug text-[#082b5c] sm:text-[22px]">
            Scopus Indexed Proceedings Associated with Our Conferences
          </h2>
          <span className="mx-auto mt-2 block h-[2px] w-12 bg-[#55a63c]" />
        </div>

        <div className="overflow-x-auto rounded-[10px] border border-[#dce4eb] bg-white shadow-[0_7px_25px_rgba(8,43,92,.06)]">
          <div className="min-w-[780px]">
            <ScopusTable rows={proceedings} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-6 flex max-w-[1020px] items-start gap-3 rounded-lg border border-[#b9cee2] bg-white px-4 py-4 text-[11px] leading-[1.6] text-[#163966] shadow-sm sm:px-6 sm:text-[12px]"
        >
          <Info
            size={23}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-[#0b4a82]"
          />
          <p>
            All conferences are pre-evaluated based on quality benchmarks,
            peer review standards and publication commitment in Scopus indexed
            proceedings or Scopus indexed journals.
          </p>
        </motion.div>
      </motion.section>

      {/* ==================== WHY SUBMIT ==================== */}
      <section className="px-4 pb-6 sm:px-8 lg:px-10">
        <motion.div
          {...reveal}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[1260px] overflow-hidden rounded-[16px] bg-gradient-to-r from-[#07396f] to-[#00335f] px-4 py-4 text-white shadow-[0_9px_25px_rgba(2,37,76,.18)] sm:px-8"
        >
          <h2 className="text-center text-[18px] font-[550] sm:text-[20px]">
            Why Submit to Our Conferences?
          </h2>
          <span className="mx-auto mt-1 block h-[2px] w-10 bg-[#7fb534]" />

          <div className="mt-6 grid grid-cols-2 gap-y-9 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
            {whySubmit.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`flex min-h-[90px] flex-col items-center justify-start px-2 text-center lg:border-r lg:border-white/35 ${
                  index === whySubmit.length - 1 ? "lg:border-r-0" : ""
                }`}
              >
                <Icon
                  size={40}
                  strokeWidth={1.35}
                  className="mb-3 text-[#7fb534] transition-transform duration-300 hover:scale-110"
                />
                <p className="max-w-[135px] text-[11.5px] font-medium leading-[1.45] text-white">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}