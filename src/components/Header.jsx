import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Conferences",
    to: "/conferences",
    children: [
      { label: "Upcoming Conferences", to: "/conferences" },
      { label: "Past Conferences", to: "/conferences" },
    ],
  },
  {
    label: "Journals & Proceedings",
    to: "/conferences",
    children: [{ label: "Scopus Indexed Proceedings", to: "/conferences" }],
  },
  {
    label: "For Authors",
    to: "/associate-conference",
    children: [{ label: "Submit Your Paper", to: "/associate-conference" }],
  },
  {
    label: "About Us",
    to: "/about",
    children: [{ label: "About Innovation Conferences", to: "/about" }],
  },
  { label: "SDG Impact", to: "/sdg-impact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-100">
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0" aria-label="Innovation Conference home">
          <img src={logo} alt="Innovation Conference logo" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => item.children && setDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[15px] font-medium py-2 transition-colors ${
                    isActive ? "text-brandGreen" : "text-navy-900 hover:text-brandGreen"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown size={15} />}
              </NavLink>
              <AnimatePresence>
                {item.children && dropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-cardHover border border-navy-100 py-2"
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-50 hover:text-brandGreen"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/associate-conference" className="btn-primary text-sm px-5 py-2.5">
            Submit Your Paper <Send size={15} />
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-navy-900"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-navy-100"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-4 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `py-3 border-b border-navy-50 text-[15px] font-medium ${
                      isActive ? "text-brandGreen" : "text-navy-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/associate-conference" className="btn-primary mt-4 text-sm">
                Submit Your Paper <Send size={15} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
