import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Award,
  ShieldCheck,
  Users2,
  Megaphone,
  TrendingUp,
  FileText,
  Search,
  ListChecks,
  BadgeCheck,
  Handshake as HandshakeIcon,
  CheckCircle2,
  Upload,
  Send,
  Mail,
  Phone,
  Info,
} from "lucide-react";
import associateHero from "../assets/images/associate_hero.png";
import PageHero from "../components/PageHero";
import Breadcrumb from "../components/Breadcrumb";

const whyAssociate = [
  { icon: Globe2, title: "Global Visibility", desc: "Get global exposure to our network of researchers, institutions and industry experts." },
  { icon: Award, title: "Scopus Indexed Tie-Ups", desc: "Access tie-ups with Scopus indexed proceedings and journals." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Your conference goes through our rigorous pre-evaluation for quality and standards." },
  { icon: Users2, title: "Large Academic Network", desc: "Reach 10,000+ authors and an extensive network across 120+ countries." },
  { icon: Megaphone, title: "Promotion & Support", desc: "We promote your conference through our platforms and academic channels." },
  { icon: TrendingUp, title: "Sustainable Impact", desc: "Together we align research with the UN Sustainable Development Goals (SDGs)." },
];

const process = [
  { icon: FileText, title: "Submission", desc: "You submit your conference details through our evaluation form." },
  { icon: Search, title: "Initial Screening", desc: "We review basic requirements, scope, relevance and documentation." },
  { icon: ListChecks, title: "Detailed Evaluation", desc: "Our expert panel evaluates quality, organizing team, previous records and publication plan." },
  { icon: BadgeCheck, title: "Decision & Feedback", desc: "You receive the decision with recommendations for improvement (if any)." },
  { icon: HandshakeIcon, title: "Association & Tie-Up", desc: "Once approved, we associate your conference with Scopus indexed proceedings/journals." },
  { icon: Megaphone, title: "Promotion & Support", desc: "We promote your conference globally and support you at every step." },
];

const whatWeLookFor = [
  "Clear aims, scope and relevance",
  "Strong and diverse organizing committee",
  "Quality of previous conferences (if any)",
  "Publication plan with Scopus indexed proceedings or journals",
  "Peer review and quality assurance process",
  "Alignment with SDGs and global impact",
  "Ethical standards and transparency",
];

const importantNotes = [
  "Submission is completely FREE.",
  "Only pre-evaluated conferences will be associated.",
  "We maintain strict quality and publication standards.",
  "Evaluation time: 7–14 working days.",
];

const countries = ["India", "United States", "United Kingdom", "Singapore", "Malaysia", "UAE", "Australia", "Thailand", "Spain", "Other"];
const venueModes = ["In Person", "Hybrid", "Virtual"];
const publicationPlans = [
  "Innovation Conference Proceedings (ICP) - Scopus",
  "Innovation in Technology and Science Proceedings (ITS-P) - Scopus",
  "Advances in Social Sciences & Education (ASSEP) - Scopus",
  "Innovation in Health and Life Sciences Proceedings (IHLSP) - Scopus",
  "Sustainable Engineering and Technology Proceedings (SETP) - Scopus",
  "Other / Not yet decided",
];

export default function AssociateConference() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Associate Your Conference With Us | Innovation Conference";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Partner with Innovation Conferences to host pre-evaluated, high quality conferences with tie-ups to Scopus indexed proceedings and journals."
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="container-page pt-6">
        <Breadcrumb items={[{ label: "For Authors", to: "/associate-conference" }, { label: "Associate Your Conference" }]} />
      </div>

      <PageHero
        eyebrow=""
        titleLines={[{ text: "Associate Your Conference" }, { text: "with Innovation Conferences", accent: true }]}
        description="Expand Reach. Ensure Quality. Create Global Impact. Partner with us to host pre-evaluated, high quality conferences with tie-ups to Scopus indexed proceedings and journals, ensuring visibility, credibility and real impact for your research community."
        image={associateHero}
        imageAlt="Business handshake representing global partnership"
      />

      {/* Why associate */}
      <section className="container-page py-16">
        <h2 className="text-2xl font-bold text-navy-900 text-center">Why Associate Your Conference with Us?</h2>
        <span className="section-title-underline mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {whyAssociate.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-navy-100 rounded-xl p-6 text-center hover:shadow-cardHover transition-shadow"
            >
              <w.icon className="text-brandGreen mx-auto mb-3" size={28} />
              <h3 className="font-bold text-navy-900 text-sm mb-2">{w.title}</h3>
              <p className="text-xs text-navy-500 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Evaluation process */}
      <section className="bg-navy-50 py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy-900 text-center">Our Conference Evaluation Process</h2>
          <span className="section-title-underline mx-auto" />
          <p className="text-center text-navy-600 text-sm mt-4 max-w-xl mx-auto">
            Every conference is carefully evaluated before association to ensure the highest quality and impact.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-center"
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
        </div>
      </section>

      {/* Submission form + sidebar */}
      <section className="container-page py-16 grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Submit Your Conference for Evaluation</h2>
          <span className="section-title-underline" />
          <p className="text-navy-500 text-sm mt-4 mb-6">
            Please provide accurate information for a smooth evaluation process.
          </p>

          {submitted ? (
            <div className="border border-brandGreen-200 bg-brandGreen-50 rounded-xl p-8 text-center">
              <CheckCircle2 className="text-brandGreen mx-auto mb-3" size={40} />
              <h3 className="font-bold text-navy-900 text-lg mb-1">Submission Received</h3>
              <p className="text-navy-600 text-sm">
                Thank you for submitting your conference. Our team will review it and get back to you within 7–14
                working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Conference Title" required>
                  <input type="text" required placeholder="Enter conference title" className="form-input" />
                </Field>
                <Field label="Acronym (if any)">
                  <input type="text" placeholder="e.g. ICSE 2026" className="form-input" />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Organizer / Institution" required>
                  <input type="text" required placeholder="Enter organizer / institution name" className="form-input" />
                </Field>
                <Field label="Country" required>
                  <select required className="form-input" defaultValue="">
                    <option value="" disabled>
                      Select Country
                    </option>
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Conference Dates" required>
                  <input type="text" required placeholder="Select dates" className="form-input" />
                </Field>
                <Field label="Venue / Mode" required>
                  <select required className="form-input" defaultValue="">
                    <option value="" disabled>
                      Select mode
                    </option>
                    {venueModes.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Conference Website">
                  <input type="url" placeholder="https://www.example.com" className="form-input" />
                </Field>
                <Field label="Contact Email" required>
                  <input type="email" required placeholder="name@example.com" className="form-input" />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Contact Person" required>
                  <input type="text" required placeholder="Full name" className="form-input" />
                </Field>
                <Field label="Contact Phone" required>
                  <input type="tel" required placeholder="+1 234 567 8900" className="form-input" />
                </Field>
              </div>

              <Field label="Conference Scope & Tracks" required>
                <textarea
                  required
                  rows={3}
                  placeholder="Briefly describe the scope, themes and tracks of your conference..."
                  className="form-input resize-none"
                />
              </Field>

              <Field label="Publication Plan" required>
                <select required className="form-input" defaultValue="">
                  <option value="" disabled>
                    Select publication plan
                  </option>
                  {publicationPlans.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Field>

              <Field label="Upload Supporting Documents">
                <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-navy-200 rounded-lg py-8 cursor-pointer hover:border-brandGreen transition-colors text-center">
                  <Upload className="text-navy-400" size={22} />
                  <span className="text-sm text-navy-600">Click to upload files or drag and drop</span>
                  <span className="text-xs text-navy-400">PDF, DOC, DOCX, PPT, ZIP (Max 20MB)</span>
                  <input type="file" className="hidden" />
                </label>
              </Field>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Submit for Evaluation <Send size={16} />
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6 h-fit">
          <div className="border border-navy-100 rounded-xl p-6">
            <h3 className="font-bold text-navy-900 mb-4">What We Look For</h3>
            <ul className="space-y-3">
              {whatWeLookFor.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm text-navy-700">
                  <CheckCircle2 size={16} className="text-brandGreen shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-900 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Info size={17} className="text-brandGreen" /> Important Notes
            </h3>
            <ul className="space-y-3 text-sm text-navy-100">
              {importantNotes.map((n) => (
                <li key={n} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-brandGreen shrink-0 mt-0.5" />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-navy-100 rounded-xl p-6">
            <h3 className="font-bold text-navy-900 mb-1">Need Help?</h3>
            <p className="text-xs text-navy-500 mb-4">Our team is here to assist you.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-navy-700">
                <Mail size={15} className="text-brandGreen shrink-0" />
                <a href="mailto:partner@innovationconferences.org" className="hover:text-brandGreen break-all">
                  partner@innovationconferences.org
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-navy-700">
                <Phone size={15} className="text-brandGreen shrink-0" />
                <span>+91 12345 67890</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-navy-900 to-brandGreen-800 px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <HandshakeIcon className="text-white shrink-0 hidden sm:block" size={36} />
            <div>
              <h3 className="text-white font-bold text-xl">Let's Collaborate for a Better Future</h3>
              <p className="text-navy-100 text-sm mt-1">
                Join Innovation Conferences and be part of a global movement to advance research, innovation and
                sustainable development.
              </p>
            </div>
          </div>
          <a href="#top" className="btn-green shrink-0">
            Submit Your Conference <Send size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-800 mb-1.5 block">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}
