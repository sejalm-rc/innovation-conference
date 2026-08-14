import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Users2,
  Globe2,
  ClipboardCheck,
  ShieldCheck,
  BookOpenCheck,
  ShieldAlert,
  Eye,
  Handshake,
  Star,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  FileText,
  Search,
  ListChecks,
  BadgeCheck,
  Award,
} from "lucide-react";
import aboutHero from "../assets/images/about_hero.png";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";

const mission = [
  { icon: Target, text: "To host and promote pre-evaluated, top quality conferences that drive meaningful research and innovation." },
  { icon: Users2, text: "To ensure all accepted papers are published in Scopus indexed proceedings or Scopus indexed journals." },
  { icon: Globe2, text: "To foster global collaboration and contribute to a sustainable and inclusive future through research." },
];

const commitments = [
  { icon: ClipboardCheck, title: "Pre-Evaluation", desc: "Every conference goes through a rigorous pre-evaluation process based on quality, academic value, scope and integrity." },
  { icon: ShieldCheck, title: "Quality Standards", desc: "We assess the scientific committee, reviewers, publication partner, past record and infrastructure before approval." },
  { icon: BookOpenCheck, title: "Scopus Indexed Tie-Ups", desc: "Only conferences with tie-ups to Scopus indexed proceedings or journals are listed on our platform." },
  { icon: Users2, title: "Rigorous Peer Review", desc: "All submitted papers undergo a strict peer review by experts ensuring originality, relevance and quality." },
  { icon: Eye, title: "Transparency", desc: "Clear information on dates, committees, publication partners, fees and processes – always upfront." },
  { icon: ShieldAlert, title: "Ethics & Integrity", desc: "We follow high ethical standards and promote plagiarism-free, responsible and inclusive research." },
];

const whyAuthors = [
  { icon: Globe2, label: "Global visibility for your research" },
  { icon: Award, label: "Scopus indexed publications" },
  { icon: CheckCircle2, label: "High quality peer review" },
  { icon: Users2, label: "Connect with global experts & leaders" },
  { icon: TrendingUp, label: "Make a real world impact" },
];

const process = [
  { icon: FileText, title: "Application Received", desc: "Conference proposal submitted by the host organization." },
  { icon: Search, title: "Pre-Screening", desc: "Initial screening for scope, relevance, and basic requirements." },
  { icon: ListChecks, title: "Detailed Evaluation", desc: "Assessment by our expert panel on quality, committee, publication tie-ups, and past record." },
  { icon: BadgeCheck, title: "Approval", desc: "Only conferences that meet our strict standards are approved and featured." },
  { icon: ShieldCheck, title: "Publication Tie-Up Verified", desc: "We ensure the conference has a valid tie-up with Scopus indexed proceedings or journals." },
  { icon: Star, title: "Listed on Platform", desc: "Approved conferences are published on our platform for global visibility." },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Innovation Conference";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Learn about Innovation Conferences — a global platform dedicated to organizing high quality academic conferences published in Scopus indexed proceedings and journals."
      );
  }, []);

  return (
    <div>
      <div className="container-page pt-6">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>

      <PageHero
        eyebrow="About Innovation Conferences"
        titleLines={[
          { text: "Advancing Research." },
          { text: "Ensuring Quality. Creating Impact." },
        ]}
        description="Innovation Conferences is a global platform dedicated to organizing high quality academic conferences that lead to publications in Scopus indexed proceedings and journals."
        image={aboutHero}
        imageAlt="Global research network with sustainable growth"
      />

      {/* Who we are / mission */}
      <section className="container-page py-16 grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-navy-900">Who We Are</h2>
          <span className="section-title-underline" />
          <p className="mt-4 text-navy-600 text-[15px] leading-relaxed">
            Innovation Conferences brings together researchers, academicians, industry experts and policy leaders
            from around the world to exchange ideas, share knowledge and advance solutions for real world
            challenges.
          </p>
          <p className="mt-4 text-navy-600 text-[15px] leading-relaxed">
            We are committed to research excellence, ethical standards and global impact aligned with the United
            Nations Sustainable Development Goals (SDGs).
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
          <span className="section-title-underline" />
          <ul className="mt-4 space-y-4">
            {mission.map((m) => (
              <li key={m.text} className="flex gap-3">
                <span className="w-9 h-9 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                  <m.icon size={17} className="text-brandGreen" />
                </span>
                <p className="text-navy-600 text-[15px] leading-relaxed">{m.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Commitment to quality */}
      <section className="container-page pb-16">
        <SectionTitle
          title="Our Commitment to Quality"
          center
          subtitle="We maintain uncompromising standards in every conference we host."
        />
        <p className="text-center text-brandGreen font-semibold text-sm -mt-2 mb-10">
          Only high quality conferences are selected and supported.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {commitments.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-navy-100 rounded-xl p-6 text-center hover:shadow-cardHover transition-shadow"
            >
              <c.icon className="text-brandGreen mx-auto mb-3" size={28} />
              <h3 className="font-bold text-navy-900 text-sm mb-2">{c.title}</h3>
              <p className="text-xs text-navy-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why authors choose */}
      <section className="bg-navy-50 py-14">
        <div className="container-page grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 text-center lg:text-left mb-8">
              Why Authors Choose Innovation Conferences
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {whyAuthors.map((w) => (
                <div key={w.label} className="text-center">
                  <w.icon className="text-brandGreen mx-auto mb-2" size={26} />
                  <p className="text-xs text-navy-700 leading-snug">{w.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-brandGreen font-extrabold text-xl leading-tight tracking-wide">SUSTAINABLE</p>
            <p className="text-navy-900 font-extrabold text-xl leading-tight tracking-wide">DEVELOPMENT</p>
            <p className="text-amber-500 font-extrabold text-3xl leading-tight tracking-wide">GOALS</p>
            <p className="text-navy-600 text-sm mt-2 max-w-[220px]">
              We align with all 17 UN Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation process */}
      <section className="container-page py-16">
        <SectionTitle title="Our Conference Evaluation Process" center />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {process.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-navy-900 text-white flex items-center justify-center mb-3">
                <p.icon size={24} />
              </div>
              <p className="text-brandGreen font-bold text-xs mb-1">0{i + 1}</p>
              <h3 className="font-bold text-navy-900 text-sm mb-1.5">{p.title}</h3>
              <p className="text-xs text-navy-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-navy-900 to-brandGreen-800 px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Handshake className="text-white shrink-0 hidden sm:block" size={36} />
            <div>
              <h3 className="text-white font-bold text-xl">Quality is Our Promise. Impact is Our Purpose.</h3>
              <p className="text-navy-100 text-sm mt-1">
                Join us in building a better future through high quality research and collaboration.
              </p>
            </div>
          </div>
          <Link to="/conferences" className="btn-green shrink-0">
            Explore Conferences <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
