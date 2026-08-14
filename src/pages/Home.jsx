import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileSearch,
  Globe2,
  Grid2X2,
  Leaf,
  Network,
  Search,
  Send,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import homeBg from "../assets/img/homeBg.png";
import goal from "../assets/img/goal.png";

import sdg1 from "../assets/images/sdg/sdg-1.png";
import sdg2 from "../assets/images/sdg/sdg-2.png";
import sdg3 from "../assets/images/sdg/sdg-3.png";
import sdg4 from "../assets/images/sdg/sdg-4.png";
import sdg5 from "../assets/images/sdg/sdg-5.png";
import sdg6 from "../assets/images/sdg/sdg-6.png";
import sdg7 from "../assets/images/sdg/sdg-7.png";
import sdg8 from "../assets/images/sdg/sdg-8.png";
import sdg9 from "../assets/images/sdg/sdg-9.png";
import sdg10 from "../assets/images/sdg/sdg-10.png";
import sdg11 from "../assets/images/sdg/sdg-11.png";
import sdg12 from "../assets/images/sdg/sdg-12.png";
import sdg13 from "../assets/images/sdg/sdg-13.png";
import sdg14 from "../assets/images/sdg/sdg-14.png";
import sdg15 from "../assets/images/sdg/sdg-15.png";
import sdg16 from "../assets/images/sdg/sdg-16.png";
import sdg17 from "../assets/images/sdg/sdg-17.png";
import sdgLogo from "../assets/images/sdg/sdg-logo.png";



const trust = [
  [ShieldCheck, "Scopus Indexed", "Conferences & Proceedings"],
  [Users, "Rigorous Peer Review", "& High Quality Standards"],
  [Globe2, "Global Visibility", "& Academic Recognition"],
  [Leaf, "Aligned with", "Sustainable Development Goals"],
];
const stats = [
  [Users, "500+", "International Conferences Hosted"],
  [BookOpen, "Scopus Indexed", "Proceedings & Journals"],
  [Globe2, "10,000+", "Authors from 120+ Countries"],
  [BarChart3, "High Impact", "Research. Real World Change."],
];
const reasons = [
  [
    ShieldCheck,
    "text-green-700 border-green-200",
    "Quality You Can Trust",
    "All conferences follow strict peer review and quality evaluation to ensure high academic standards.",
  ],
  [
    FileSearch,
    "text-sky-600 border-sky-200",
    "Scopus Indexed Publications",
    "Publish in Scopus indexed proceedings and journals for greater visibility and credibility.",
  ],
  [
    Users,
    "text-violet-600 border-violet-200",
    "For Authors, By Researchers",
    "Designed to support authors at every step – from discovery to publication.",
  ],
  [
    Clock3,
    "text-sky-700 border-sky-200",
    "Timely & Efficient Process",
    "Transparent timeline and smooth process from submission to publication.",
  ],
  [
    Sprout,
    "text-green-600 border-green-200",
    "Sustainable Future Together",
    "We promote research and innovation that contributes to achieving the UN Sustainable Development Goals.",
  ],
];
const conferences = [
  [
    "20–22",
    "SEP 2026",
    "Singapore",
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85",
    "International Conference on AI, Data Science & Innovation (ICADSI 2026)",
  ],
  [
    "15–17",
    "OCT 2026",
    "Barcelona, Spain",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85",
    "Global Conference on Sustainability, Engineering & Technology (GCSET 2026)",
  ],
  [
    "10–12",
    "NOV 2026",
    "Dubai, UAE",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    "International Conference on Health, Medicine & Life Sciences (ICHMLS 2026)",
  ],
];
const features = [
  [
    ShieldCheck,
    "Transparent Process",
    "Clear guidelines and transparent communication at every step.",
  ],
  [
    Clock3,
    "Timely Publication",
    "We value your time and ensure timely reviews and publications.",
  ],
  [
    Network,
    "Global Networking",
    "Connect with researchers, innovators and experts worldwide.",
  ],
  [
    Grid2X2,
    "Open to All Disciplines",
    "From engineering to social sciences, life sciences to arts – all research areas are welcome.",
  ],
];
const show = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

const sdgImages = [
  sdg1,
  sdg2,
  sdg3,
  sdg4,
  sdg5,
  sdg6,
  sdg7,
  sdg8,
  sdg9,
  sdg10,
  sdg11,
  sdg12,
  sdg13,
  sdg14,
  sdg15,
  sdg16,
  sdg17,
  sdgLogo,
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white font-sans text-[#071f46]">
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative mt-0 min-h-[545px] bg-cover bg-[64%_center] lg:bg-center"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden" />
        <div className="relative mx-auto max-w-[1170px] px-5 pb-14 pt-12 sm:px-8 lg:px-10 xl:px-0">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[555px]"
          >
            <h1 className="text-[36px] font-[600] leading-[1.12]  tracking-tight sm:text-[40px]">
              High Quality Conferences.
              <br />
              Scopus Indexed.
              <br />
              <span className="text-[#318b32]">Global Impact.</span>
            </h1>
            <p className="mt-5 max-w-[480px] text-[14px] leading-[1.65] text-[#243954] sm:text-[15px]">
              A trusted platform for researchers and innovators to publish in
              high quality Scopus indexed conferences, proceedings and journals
              driving sustainable development worldwide.
            </p>
           <div className="mt-7 grid grid-cols-2 gap-y-2 text-center sm:grid-cols-4 sm:gap-0">
  {trust.map(([Icon, title, text], i) => (
    <motion.div
      key={title}
      whileHover={{ y: -5 }}
      className={`flex min-h-[108px] flex-col items-center px-2 text-center sm:border-r sm:border-slate-200 ${
        i === 0 ? "sm:pl-0" : ""
      } ${i === 3 ? "sm:border-r-0" : ""}`}
    >
      <Icon
        size={31}
        strokeWidth={1.6}
        className="mb-2 text-[#318b32]"
      />

      <b className="block text-[11px] leading-5">{title}</b>

      <span className="block text-[11px] leading-5">
        {text}
      </span>
    </motion.div>
  ))}
</div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:gap-7">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#082f63] px-5 py-3.5 text-[13px] font-[550] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0b417f]"
              >
                <Search size={18} />
                Explore Conferences
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#7d96b8] bg-white px-5 py-3.5 text-[13px] font-[550] transition hover:-translate-y-1 hover:border-green-600 hover:text-green-700"
              >
                <BookOpen size={18} />
                Browse Journals & Proceedings
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
  {/* ==================== STATISTICS SECTION ==================== */}
<section className="relative z-10">
  <motion.div
    {...show}
    transition={{ duration: 0.55 }}
    className="mx-auto grid w-[calc(100%-40px)] max-w-[1170px] grid-cols-1 gap-6 rounded-xl bg-gradient-to-r from-[#082f63] to-[#004272] px-6 py-6 text-white shadow-xl sm:w-[calc(100%-64px)] sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-0 lg:px-10 xl:w-full"
  >
    {stats.map(([Icon, value, text], i) => (
      <motion.div
        key={value}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className={`flex min-h-[75px] items-center justify-center gap-4 px-3 text-left sm:justify-start lg:min-h-[62px] lg:border-r lg:border-white/30 lg:px-8 ${
          i === 0 ? "lg:pl-0" : ""
        } ${i === 3 ? "lg:border-r-0 lg:pr-0" : ""}`}
      >
        {/* Statistics icon */}
        <Icon
          size={40}
          strokeWidth={1.5}
          className="shrink-0 text-white"
        />

        {/* Statistics content */}
        <div className="w-full max-w-[145px]">
          <strong className="block text-[19px] font-[550] leading-tight text-[#73d637]">
            {value}
          </strong>

          <span className="mt-1 block text-[11px] leading-[1.65] text-white">
            {text}
          </span>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>
      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="mx-auto max-w-[1170px] px-5 pb-7 pt-7 sm:px-8 lg:px-10 xl:px-0">
        <h2 className="text-center text-[22px] font-[550]">
          Why Choose Innovation Conference Hub?
        </h2>
        <i className="mx-auto mt-1 block h-0.5 w-14 bg-[#318b32]" />
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {reasons.map(([Icon, color, title, text], i) => (
            <motion.article
              {...show}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              key={title}
              className="min-h-[245px] rounded-[10px] border border-slate-200 bg-white px-4 py-4 text-center transition-shadow hover:border-green-300 hover:shadow-xl"
            >
              <div
                className={`mx-auto mb-4 grid h-[66px] w-[66px] place-items-center rounded-full border ${color}`}
              >
                <Icon size={36} />
              </div>
              <h3 className="mx-auto mb-3 max-w-[155px] text-[13px] font-[550] leading-[1.45]">
                {title}
              </h3>
              <p className="text-[12px] leading-[1.65]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>
      {/* ==================== SDG CTA SECTION ==================== */}
<motion.section
  {...show}
  transition={{ duration: 0.6 }}
  className="mx-auto mb-5 w-[calc(100%-32px)] max-w-[1170px] overflow-hidden rounded-xl bg-[#f4f7f4] px-4 py-4 shadow-sm sm:px-5"
>
  <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[110px_315px_1fr] lg:gap-4">
    {/* Left SDG goal image */}
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center"
    >
      <img
        src={goal}
        alt="Sustainable Development Goals"
        className="h-[105px] w-[105px] object-contain sm:h-[112px] sm:w-[112px]"
      />
    </motion.div>

    {/* Middle text content */}
    <div className="text-center lg:text-left">
      <h2 className="text-[15px] font-bold leading-snug text-[#2d8733] sm:text-[16px]">
        Driving Research for a Sustainable World
      </h2>

      <p className="mx-auto mt-2 max-w-[310px] text-[10.5px] leading-[1.65] text-[#1c3048] lg:mx-0">
        Our conferences and publications support all 17 Sustainable Development
        Goals of the United Nations.
      </p>

      <a
        href="#"
        className="mt-3 inline-flex min-h-[35px] items-center justify-center gap-2 rounded-md border border-[#8099b7] bg-white px-4 text-[10px] font-bold text-[#082f63] transition duration-300 hover:-translate-y-1 hover:border-[#318b32] hover:text-[#318b32] hover:shadow-md"
      >
        Learn More About Our SDG Impact

        <Leaf
          size={14}
          strokeWidth={1.8}
          className="text-[#318b32]"
        />
      </a>
    </div>

    {/* Right 18 SDG images */}
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-9 lg:gap-[7px]">
      {sdgImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: index * 0.025,
          }}
          whileHover={{
            y: -4,
            scale: 1.06,
          }}
          className="flex aspect-square items-center justify-center overflow-hidden rounded-[2px] bg-white transition-shadow duration-300 hover:z-10 hover:shadow-lg"
        >
          <img
            src={image}
            alt={
              index < 17
                ? `Sustainable Development Goal ${index + 1}`
                : "Sustainable Development Goals logo"
            }
            className="h-full w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
      {/* ==================== UPCOMING CONFERENCES SECTION ==================== */}
      <section className="mx-auto max-w-[1170px] px-5 pb-4 sm:px-8 lg:px-10 xl:px-0">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[19px] font-bold">Upcoming Conferences</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-[10px] font-bold text-[#318b32] hover:gap-2"
          >
            View All Conferences <ArrowRight size={14} />
          </a>
        </div>
        <div className="relative">
          <button className="absolute -left-9 top-[72px] z-10 hidden h-9 w-9 place-items-center rounded-full bg-[#082f63] text-white transition hover:scale-110 xl:grid">
            <ChevronLeft />
          </button>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {conferences.map(([date, month, place, image, title], i) => (
              <motion.article
                {...show}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -7 }}
                key={title}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md hover:shadow-xl"
              >
                <div
                  className="relative h-[103px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute left-3 top-0 rounded-b-md bg-[#318b32] px-3 py-2 text-center text-[7px] text-white">
                    <b className="block text-[17px] leading-none">{date}</b>
                    {month}
                    <br />
                    {place}
                  </div>
                </div>
                <div className="px-4 py-3">
                  <h3 className="min-h-[36px] text-[11px] font-bold leading-[1.45]">
                    {title}
                  </h3>
                  <div className="mt-2 flex gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[8px] text-blue-700">
                      Scopus Indexed Proceedings
                    </span>
                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-[8px] text-green-700">
                      Hybrid
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <button className="absolute -right-9 top-[72px] z-10 hidden h-9 w-9 place-items-center rounded-full bg-[#082f63] text-white transition hover:scale-110 xl:grid">
            <ChevronRight />
          </button>
        </div>
      </section>
      {/* ==================== PLATFORM FEATURES SECTION ==================== */}
      <section className="mt-2 bg-gradient-to-r from-[#07386f] to-[#004276] py-7 text-white">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-7 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-0 lg:px-10 xl:px-0">
          {features.map(([Icon, title, text], i) => (
            <motion.div
              {...show}
              whileHover={{ y: -4 }}
              key={title}
              className={`flex gap-4 lg:border-r lg:border-white/30 lg:px-7 ${i === 0 ? "lg:pl-0" : ""} ${i === 3 ? "lg:border-0" : ""}`}
            >
              <Icon size={35} className="shrink-0" />
              <div>
                <h3 className="text-[12px] font-bold">{title}</h3>
                <p className="mt-1 text-[9.5px] leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ==================== NEWSLETTER CTA SECTION ==================== */}
      <section className="bg-[radial-gradient(circle_at_92%_120%,#319a75_0%,transparent_38%),linear-gradient(100deg,#155d98,#006d75)] py-5 text-white">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-7 px-5 sm:px-8 md:grid-cols-[1.15fr_1fr_.8fr] lg:px-10 xl:px-0">
          <div className="md:border-r md:border-white/35 md:pr-8">
            <h3 className="text-[16px] font-bold">
              Be Part of Innovation. Be Part of Impact.
            </h3>
            <p className="mt-1 text-[9.5px]">
              Share your research. Inspire change. Build a better future.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 rounded bg-[#3b9e38] px-5 py-2.5 text-[10px] font-bold transition hover:-translate-y-1"
            >
              Submit Your Paper <Send size={14} />
            </a>
          </div>
          <div className="md:border-r md:border-white/35 md:pr-8">
            <h3 className="text-[13px] font-bold">Stay Updated</h3>
            <p className="mt-1 text-[9.5px]">
              Subscribe to get latest conference updates and important
              announcements.
            </p>
            <div className="mt-2 flex">
              <input
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l px-3 py-2 text-[10px] text-slate-900 outline-none"
              />
              <button className="rounded-r bg-[#3b9e38] px-5 text-[10px] font-bold hover:bg-green-500">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-[13px] font-bold">Connect With Us</h3>
            <div className="mt-4 flex gap-2">
              {["in", "𝕏", "f", "▶", "◎"].map((x) => (
                <a
                  href="#"
                  key={x}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/60 text-[11px] font-bold transition hover:-translate-y-1 hover:bg-white hover:text-[#083664]"
                >
                  {x}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
