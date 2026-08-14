import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users2,
  FileBarChart2,
  Globe2,
  Leaf,
  Search,
  Lightbulb,
  ShieldCheck,
  Handshake,
  ArrowRight,
  Quote,
} from "lucide-react";
import sdgHero from "../assets/images/sdg_hero.png";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";
import SdgGrid from "../components/SdgGrid";

const commitments = [
  "Promote interdisciplinary research for sustainable solutions",
  "Encourage responsible innovation and ethical research",
  "Facilitate global collaboration and knowledge exchange",
  "Support capacity building in developing communities",
  "Drive policy impact through evidence based research",
];

const impactStats = [
  { icon: Users2, value: "500+", label: "Conferences Hosted Across 60+ countries" },
  { icon: FileBarChart2, value: "15,000+", label: "Research Papers Contributed" },
  { icon: Users2, value: "25,000+", label: "Researchers & Authors Engaged" },
  { icon: Globe2, value: "120+", label: "Countries Participated" },
  { icon: Leaf, value: "Strong Impact", label: "Aligned with UN SDGs" },
];

const drivers = [
  { icon: Search, title: "Thematic Focus", desc: "Conferences are organized around themes that address critical global challenges aligned with SDGs." },
  { icon: Users2, title: "Inclusive Participation", desc: "We encourage participation from diverse communities, including researchers from developing regions." },
  { icon: Lightbulb, title: "Knowledge to Action", desc: "Research presented at our conferences contributes to real world solutions and evidence based policies." },
  { icon: Globe2, title: "Global Collaboration", desc: "We connect researchers, innovators and policymakers to accelerate sustainable impact." },
  { icon: ShieldCheck, title: "Quality & Integrity", desc: "All conferences are pre-evaluated to ensure high quality, ethical and impactful outcomes." },
];

const impactActions = [
  "Climate change solutions",
  "Sustainable cities & communities",
  "Quality education for all",
  "Good health & well-being",
  "Clean energy innovations",
  "Peace, justice & strong institutions",
  "Partnerships for the goals",
];

export default function SDGImpact() {
  useEffect(() => {
    document.title = "SDG Impact | Innovation Conference";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Discover how Innovation Conferences drives research and innovation aligned with all 17 United Nations Sustainable Development Goals."
      );
  }, []);

  return (
    <div>
      <div className="container-page pt-6">
        <Breadcrumb items={[{ label: "SDG Impact" }]} />
      </div>

      <PageHero
        eyebrow="SDG Impact"
        titleLines={[{ text: "Research with Purpose." }, { text: "Innovation for a Sustainable Future.", accent: true }]}
        description="At Innovation Conferences, we believe that high quality research and innovation are powerful drivers for achieving the United Nations Sustainable Development Goals (SDGs)."
        image={sdgHero}
        imageAlt="Green globe representing sustainable development"
      />

      {/* Commitment + impact at a glance */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-navy-900">Our Commitment to the SDGs</h2>
          <span className="section-title-underline" />
          <p className="mt-4 text-navy-600 text-[15px] leading-relaxed">
            We are committed to promoting research, collaboration and knowledge sharing that address global
            challenges and advance the 17 Sustainable Development Goals.
          </p>
          <ul className="mt-5 space-y-3">
            {commitments.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-navy-700">
                <CheckCircle2 size={17} className="text-brandGreen shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
          <button className="btn-secondary mt-6 text-sm">
            Read Our SDG Policy <ArrowRight size={15} />
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="text-2xl font-bold text-navy-900">Impact at a Glance</h2>
          <span className="section-title-underline" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {impactStats.map((s) => (
              <div key={s.label} className="border border-navy-100 rounded-xl p-4 text-center">
                <s.icon className="text-brandGreen mx-auto mb-2" size={24} />
                <p className="font-bold text-navy-900 text-sm">{s.value}</p>
                <p className="text-xs text-navy-500 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 17 SDGs */}
      <section className="container-page pb-16">
        <SectionTitle title="Supporting All 17 Sustainable Development Goals" center />
        <div className="mt-8 flex justify-center">
          <SdgGrid />
        </div>
      </section>

      {/* How we drive impact */}
      <section className="bg-navy-50 py-16">
        <div className="container-page">
          <SectionTitle title="How We Drive SDG Impact Through Our Conferences" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {drivers.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-center"
              >
                <d.icon className="text-brandGreen mx-auto mb-3" size={28} />
                <h3 className="font-bold text-navy-900 text-sm mb-1.5">{d.title}</h3>
                <p className="text-xs text-navy-500 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real impact / quote */}
      <section className="container-page py-16 grid lg:grid-cols-[1fr_1fr_auto] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden h-64 lg:h-full bg-gradient-to-br from-brandGreen-100 to-navy-100 flex items-center justify-center"
        >
          <Globe2 className="text-brandGreen" size={96} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-navy-900">Real Impact. Real Change.</h2>
          <span className="section-title-underline" />
          <p className="mt-4 text-navy-600 text-[15px] leading-relaxed">
            The research and collaborations initiated through our conferences contribute to innovations, policies
            and solutions that create a better, more sustainable future for all.
          </p>
          <div className="mt-6 border-l-4 border-brandGreen bg-navy-50 rounded-r-lg p-5">
            <Quote className="text-brandGreen mb-2" size={20} />
            <p className="text-navy-700 text-sm italic leading-relaxed">
              Together, through research and innovation, we can achieve the SDGs and leave a lasting legacy for
              future generations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-navy-50 rounded-xl p-6 w-full lg:w-72"
        >
          <h3 className="font-bold text-brandGreen text-sm mb-4">Our Impact in Action</h3>
          <ul className="space-y-2.5">
            {impactActions.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-navy-700">
                <CheckCircle2 size={15} className="text-brandGreen shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-navy-900 to-brandGreen-800 px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Handshake className="text-white shrink-0 hidden sm:block" size={36} />
            <div>
              <h3 className="text-white font-bold text-xl">Be Part of the Change</h3>
              <p className="text-navy-100 text-sm mt-1">
                Join us in advancing the Sustainable Development Goals through high quality research, innovation
                and collaboration.
              </p>
            </div>
          </div>
          <Link to="/conferences" className="btn-green shrink-0">
            Explore Our Conferences <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
