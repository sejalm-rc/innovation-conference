// src/pages/About.jsx

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Globe2,
  Handshake,
  ListChecks,
  Search,
  ShieldAlert,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users2,
} from "lucide-react";

import aboutHero from "../assets/img/aboutbg.png";
import ctaimg from "../assets/img/aboutcta.png";

import cta from "../assets/img/cta.png";




const missionItems = [
  {
    icon: Target,
    text: "To host and promote pre-evaluated, top quality conferences that drive meaningful research and innovation.",
  },
  {
    icon: Users2,
    text: "To ensure all accepted papers are published in Scopus indexed proceedings or Scopus indexed journals.",
  },
  {
    icon: Globe2,
    text: "To foster global collaboration and contribute to a sustainable and inclusive future through research.",
  },
];

/* =========================================================
   QUALITY COMMITMENT DATA
========================================================= */

const commitmentItems = [
  {
    icon: ClipboardCheck,
    title: "Pre-Evaluation",
    description:
      "Every conference goes through a rigorous pre-evaluation process based on quality, academic value, scope and integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    description:
      "We assess the scientific committee, reviewers, publication partner, past record and infrastructure before approval.",
  },
  {
    icon: BookOpenCheck,
    title: "Scopus Indexed Tie-Ups",
    description:
      "Only conferences with tie-ups to Scopus indexed proceedings or journals are listed on our platform.",
  },
  {
    icon: Users2,
    title: "Rigorous Peer Review",
    description:
      "All submitted papers undergo a strict peer review by experts ensuring originality, relevance and quality.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear information on dates, committees, publication partners, fees and processes – always upfront.",
  },
  {
    icon: ShieldAlert,
    title: "Ethics & Integrity",
    description:
      "We follow high ethical standards and promote plagiarism-free, responsible and inclusive research.",
  },
];

/* =========================================================
   WHY AUTHORS CHOOSE US
========================================================= */

const authorBenefits = [
  {
    icon: Globe2,
    text: "Global visibility for your research",
  },
  {
    icon: Award,
    text: "Scopus indexed publications",
  },
  {
    icon: CheckCircle2,
    text: "High quality peer review",
  },
  {
    icon: Users2,
    text: "Connect with global experts & leaders",
  },
  {
    icon: TrendingUp,
    text: "Make a real world impact",
  },
];

/* =========================================================
   EVALUATION PROCESS
========================================================= */

const processItems = [
  {
    number: "01",
    icon: FileText,
    title: "Application Received",
    description:
      "Conference proposal submitted by the host organization.",
  },
  {
    number: "02",
    icon: Search,
    title: "Pre-Screening",
    description:
      "Initial screening for scope, relevance, and basic requirements.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Detailed Evaluation",
    description:
      "Assessment by our expert panel on quality, committee, publication tie-ups, and past record.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Approval",
    description:
      "Only conferences that meet our strict standards are approved and featured.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Publication Tie-Up Verified",
    description:
      "We ensure the conference has a valid tie-up with Scopus indexed proceedings or journals.",
  },
  {
    number: "06",
    icon: Star,
    title: "Listed on Platform",
    description:
      "Approved conferences are published on our platform for global visibility.",
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

const About = () => {
  useEffect(() => {
    document.title = "About Us | Innovation Conferences";

    const meta = document.querySelector('meta[name="description"]');

    if (meta) {
      meta.setAttribute(
        "content",
        "Innovation Conferences is a global platform dedicated to organizing high quality academic conferences with Scopus indexed publication opportunities."
      );
    }
  }, []);

  return (
    <main
      className="
        w-full
        overflow-hidden
        bg-white
        text-[#082c5c]
        font-['Poppins',sans-serif]
      "
    >
      {/* =========================================================
          ABOUT HERO SECTION
      ========================================================== */}
<section
  className="
    w-full
    bg-white
    px-[10px]

    sm:px-4
    sm:pt-3
    md:px-5
    lg:px-6
 
  "
>
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.55,
      ease: "easeOut",
    }}
    className="
      relative
      mx-auto
      w-full
      max-w-[1440px]
      overflow-hidden
      rounded-[14px]
      bg-[#002c59]

      min-h-[300px]

      sm:min-h-[320px]

      md:min-h-[330px]

      lg:min-h-[340px]

  
    "
  >

    <img
      src={aboutHero}
      alt=""
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        h-full
        w-full
        select-none
        object-cover

        object-[68%_center]

        sm:object-[65%_center]

        md:object-[62%_center]

        lg:object-center
      "
    />

    {/* =====================================================
        VERY LIGHT LEFT GRADIENT
        Only improves text readability.
        It does NOT hide the globe.
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0

        bg-[linear-gradient(90deg,rgba(0,39,78,0.96)_0%,rgba(0,42,82,0.91)_29%,rgba(0,44,84,0.52)_48%,rgba(0,35,68,0.08)_67%,rgba(0,0,0,0)_100%)]

        sm:bg-[linear-gradient(90deg,rgba(0,39,78,0.97)_0%,rgba(0,42,82,0.91)_32%,rgba(0,44,84,0.45)_52%,rgba(0,35,68,0.04)_70%,rgba(0,0,0,0)_100%)]

        lg:bg-[linear-gradient(90deg,rgba(0,39,78,0.95)_0%,rgba(0,42,82,0.84)_30%,rgba(0,44,84,0.30)_48%,rgba(0,0,0,0)_65%)]
      "
    />

    {/* =====================================================
        MOBILE READABILITY GRADIENT
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-t
        from-[#00294f]/45
        via-transparent
        to-transparent
        md:hidden
      "
    />

    {/* =====================================================
        HERO CONTENT
    ====================================================== */}
    <div
      className="
        relative
        z-10
        flex
        min-h-[300px]
        w-full
        items-center

        px-[24px]
        py-[30px]

        sm:min-h-[320px]
        sm:px-[34px]
        sm:py-[34px]

        md:min-h-[330px]
        md:px-[44px]

        lg:min-h-[340px]
        lg:px-[64px]

        xl:min-h-[350px]
        xl:px-[72px]

        2xl:min-h-[355px]
        2xl:px-[76px]
      "
    >
      {/* ===================================================
          TEXT CONTAINER
      ==================================================== */}
      <div
        className="
          w-full
          max-w-[620px]

          sm:max-w-[650px]

          md:max-w-[680px]

          lg:max-w-[700px]
        "
      >
        {/* =================================================
            EYEBROW
        ================================================== */}
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.12,
          }}
          className="
            mb-[12px]
            font-semibold
            uppercase
            tracking-[0.015em]
            text-[#58b947]

            text-[clamp(10px,0.85vw,13px)]

            sm:mb-[13px]
            lg:mb-[14px]
          "
        >
          About Innovation Conferences
        </motion.p>

        {/* =================================================
            MAIN HEADING
        ================================================== */}
        <motion.h1
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.18,
          }}
          className="
            m-0
            max-w-[700px]
            font-bold
            tracking-[-0.022em]
            text-white

            text-[clamp(27px,3.05vw,47px)]
            leading-[1.16]
          "
        >
          <span className="block">
            Advancing Research.
          </span>

          <span
            className="
              mt-[5px]
              block
              whitespace-normal

              lg:whitespace-nowrap
            "
          >
            Ensuring Quality. Creating Impact.
          </span>
        </motion.h1>

        {/* =================================================
            DESCRIPTION
        ================================================== */}
        <motion.p
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="
            mt-[18px]
            max-w-[590px]
            font-normal
            text-white/95

            text-[clamp(11px,0.94vw,14px)]
            leading-[1.75]

            sm:mt-[19px]

            lg:mt-[21px]
          "
        >
          Innovation Conferences is a global platform dedicated to organizing
          <br className="hidden md:block" />
          high quality academic conferences that lead to publications in
          <br className="hidden md:block" />
          Scopus indexed proceedings and journals.
        </motion.p>
      </div>
    </div>

   
  
  </motion.div>
</section>

      {/* =========================================================
          WHO WE ARE + OUR MISSION
      ========================================================== */}

      <section
        className="
          mx-auto
          grid
          w-full
          max-w-[1320px]
          grid-cols-1
          gap-8
          px-6
          pb-9
          pt-6

          md:grid-cols-2
          md:gap-0

          lg:px-10
          lg:pb-10
          lg:pt-7
        "
      >
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="
            md:border-r
            md:border-[#d4dde7]
            md:pr-10

            lg:pr-[60px]
          "
        >
          <h2
            className="
              text-[20px]
              font-bold
              leading-tight
              text-[#092c5c]

              lg:text-[22px]
            "
          >
            Who We Are
          </h2>

          <div className="mt-2 h-[2px] w-[34px] bg-[#48a33f]" />

          <p
            className="
              mt-5
              text-[12px]
              leading-[1.75]
              text-[#243f61]

              sm:text-[13px]
            "
          >
            Innovation Conferences brings together researchers, academicians,
            industry experts and policy leaders from around the world to
            exchange ideas, share knowledge and advance solutions for real
            world challenges.
          </p>

          <p
            className="
              mt-5
              text-[12px]
              leading-[1.75]
              text-[#243f61]

              sm:text-[13px]
            "
          >
            We are committed to research excellence, ethical standards and
            global impact aligned with the United Nations Sustainable
            Development Goals (SDGs).
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="
            md:pl-10

            lg:pl-[60px]
          "
        >
          <h2
            className="
              text-[20px]
              font-bold
              leading-tight
              text-[#092c5c]

              lg:text-[22px]
            "
          >
            Our Mission
          </h2>

          <div className="mt-2 h-[2px] w-[34px] bg-[#48a33f]" />

          <div className="mt-5 space-y-5">
            {missionItems.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
                className="group flex items-start gap-4"
              >
                <div
                  className="
                    flex
                    h-[38px]
                    w-[38px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f3f9f2]
                    text-[#46a23e]
                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:bg-[#46a23e]
                    group-hover:text-white
                  "
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <p
                  className="
                    pt-[2px]
                    text-[12px]
                    leading-[1.6]
                    text-[#243f61]

                    sm:text-[13px]
                  "
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          OUR COMMITMENT TO QUALITY
      ========================================================== */}

      <section className="px-5 pb-8 pt-1">
        <div className="mx-auto w-full max-w-[1340px]">
          {/* Section heading */}
          <div className="text-center">
            <h2
              className="
                text-[20px]
                font-bold
                text-[#092c5c]

                lg:text-[22px]
              "
            >
              Our Commitment to Quality
            </h2>

            <div className="mx-auto mt-2 h-[2px] w-[35px] bg-[#48a33f]" />

            <p
              className="
                mt-3
                text-[11px]
                text-[#41546a]

                sm:text-[12px]
              "
            >
              We maintain uncompromising standards in every conference we host.
            </p>

            <p
              className="
                mt-1
                text-[11px]
                font-semibold
                text-[#48a33f]

                sm:text-[12px]
              "
            >
              Only high quality conferences are selected and supported.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2

              md:grid-cols-3

              xl:grid-cols-6
            "
          >
            {commitmentItems.map(
              ({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="
                    group
                    min-h-[230px]
                    rounded-[8px]
                    border
                    border-[#d6e0e9]
                    bg-white
                    px-4
                    py-5
                    text-center
                    shadow-[0_2px_8px_rgba(5,45,83,0.025)]
                    transition-all
                    duration-300

                    hover:border-[#72b766]
                    hover:shadow-[0_10px_25px_rgba(9,44,92,0.10)]

                    xl:min-h-[245px]
                    xl:px-3
                  "
                >
                  <Icon
                    size={35}
                    strokeWidth={1.45}
                    className="
                      mx-auto
                      mb-4
                      text-[#45a13e]
                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                  />

                  <h3
                    className="
                      text-[12px]
                      font-bold
                      leading-[1.35]
                      text-[#0b2e5e]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[10px]
                      leading-[1.65]
                      text-[#3b506b]

                      sm:text-[10.5px]
                    "
                  >
                    {description}
                  </p>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY AUTHORS CHOOSE INNOVATION CONFERENCES
      ========================================================== */}

      <section className="px-3 py-2 sm:px-5">
        <div
          className="
            mx-auto
            w-full
            max-w-[1400px]
            rounded-[14px]
            bg-gradient-to-r
            from-[#f7faf6]
            via-[#f4f8f5]
            to-[#eef4ef]
            px-5
            py-6

            md:px-7

            lg:px-9
          "
        >
          <h2
            className="
              text-center
              text-[19px]
              font-bold
              text-[#092c5c]

              lg:text-[21px]
            "
          >
            Why Authors Choose Innovation Conferences
          </h2>

          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-y-8

              sm:grid-cols-3

              lg:grid-cols-[repeat(5,1fr)_1.2fr]
              lg:gap-0
            "
          >
            {authorBenefits.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`
                  relative
                  flex
                  min-h-[110px]
                  flex-col
                  items-center
                  justify-center
                  px-4
                  text-center

                  ${
                    index < authorBenefits.length - 1
                      ? "lg:border-r lg:border-[#cad7d3]"
                      : ""
                  }
                `}
              >
                <Icon
                  size={37}
                  strokeWidth={1.35}
                  className="mb-3 text-[#48a33f]"
                />

                <p
                  className="
                    max-w-[125px]
                    text-[10px]
                    font-medium
                    leading-[1.5]
                    text-[#233d5d]

                    sm:text-[10.5px]
                  "
                >
                  {text}
                </p>
              </motion.div>
            ))}

            {/* SDG */}
            <motion.div
              whileHover={{ y: -4 }}
              className="
                col-span-2
                flex
                min-h-[110px]
                flex-col
                items-center
                justify-center
                px-5
                text-center

                sm:col-span-1

                lg:border-l
                lg:border-[#cad7d3]
              "
            >
              <p
                className="
                  text-[13px]
                  font-extrabold
                  uppercase
                  leading-[1]
                  text-[#1598c6]
                "
              >
                Sustainable
              </p>

              <p
                className="
                  mt-[2px]
                  text-[13px]
                  font-extrabold
                  uppercase
                  leading-[1]
                  text-[#1598c6]
                "
              >
                Development
              </p>

              <p
                className="
                  mt-[2px]
                  text-[17px]
                  font-extrabold
                  uppercase
                  leading-none
                  text-[#f4a525]
                "
              >
                Goals
              </p>

              <p
                className="
                  mt-3
                  max-w-[150px]
                  text-[9px]
                  leading-[1.45]
                  text-[#334b63]
                "
              >
                We align with all 17 UN Sustainable Development Goals (SDGs).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR CONFERENCE EVALUATION PROCESS
      ========================================================== */}

      <section
        className="
          mx-auto
          w-full
          max-w-[1380px]
          px-5
          pb-10
          pt-7

          sm:px-7

          lg:pb-12
          lg:pt-8
        "
      >
        <div className="text-center">
          <h2
            className="
              text-[20px]
              font-bold
              text-[#092c5c]

              lg:text-[22px]
            "
          >
            Our Conference Evaluation Process
          </h2>

          <div className="mx-auto mt-2 h-[2px] w-[35px] bg-[#48a33f]" />
        </div>

        {/* Process */}
        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-8

            sm:grid-cols-2

            md:grid-cols-3

            xl:grid-cols-6
            xl:gap-5
          "
        >
          {processItems.map(
            ({ number, icon: Icon, title, description }, index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="relative"
              >
                {/* Desktop connector */}
                {index !== processItems.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[72%]
                      top-[31px]
                      hidden
                      w-[60%]
                      items-center

                      xl:flex
                    "
                  >
                    <div className="w-full border-t-2 border-dotted border-[#51a649]" />

                    <ArrowRight
                      size={13}
                      className="-ml-[5px] shrink-0 text-[#51a649]"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#062e5d]
                      text-white
                      shadow-[0_6px_15px_rgba(6,46,93,0.15)]
                    "
                  >
                    <Icon size={27} strokeWidth={1.5} />
                  </motion.div>

                  {/* Step number */}
                  <p
                    className="
                      mt-3
                      text-[11px]
                      font-bold
                      text-[#48a33f]
                    "
                  >
                    {number}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-1
                      max-w-[150px]
                      text-[11px]
                      font-bold
                      leading-[1.35]
                      text-[#092c5c]

                      sm:text-[11.5px]
                    "
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      max-w-[170px]
                      text-[9.5px]
                      leading-[1.55]
                      text-[#465c73]
                    "
                  >
                    {description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA SECTION
      ========================================================== */}

      <section className="px-3 pb-6 sm:px-5 lg:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[1400px]
            flex-col
            items-center
            justify-between
            gap-6
            overflow-hidden
            rounded-[13px]
            bg-gradient-to-r
            from-[#002d5a]
            via-[#00396c]
            to-[#087445]
            px-6
            py-7

            sm:px-8

            md:flex-row

            lg:px-[70px]
            lg:py-8
          "
        >
          {/* Decorative network pattern */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-20
              [background-image:radial-gradient(circle_at_80%_20%,white_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          {/* Left content */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              gap-4
              text-center

              sm:flex-row
              sm:text-left
            "
          >
            <div
              className="
                flex
                h-[58px]
                w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#59b94d]/70
                text-[#66c357]
              "
            >
              <Handshake size={32} strokeWidth={1.4} />
            </div>

            <div>
              <h3
                className="
                  text-[18px]
                  font-bold
                  leading-[1.35]
                  text-white

                  sm:text-[20px]

                  lg:text-[22px]
                "
              >
                Quality is Our Promise. Impact is Our Purpose.
              </h3>

              <p
                className="
                  mt-2
                  text-[10.5px]
                  leading-[1.55]
                  text-white/85

                  sm:text-[11px]
                "
              >
                Join us in building a better future through high quality
                research and collaboration.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="relative z-10 shrink-0"
          >
            <Link
              to="/conferences"
              className="
                group
                flex
                min-h-[46px]
                items-center
                justify-center
                gap-3
                rounded-[5px]
                bg-[#4ca33e]
                px-6
                text-[11px]
                font-semibold
                text-white
                shadow-[0_5px_15px_rgba(0,0,0,0.15)]
                transition-all
                duration-300

                hover:bg-[#398e31]
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.20)]

                sm:min-w-[180px]
              "
            >
              Explore Conferences

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;