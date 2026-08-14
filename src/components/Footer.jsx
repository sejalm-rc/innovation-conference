import { Link } from "react-router-dom";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { LinkedinIcon, TwitterIcon, FacebookIcon, YoutubeIcon, InstagramIcon } from "./SocialIcons";
import logo from "../assets/images/logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Conferences", to: "/conferences" },
  { label: "Journals & Proceedings", to: "/conferences" },
  { label: "For Authors", to: "/associate-conference" },
  { label: "About Us", to: "/about" },
  { label: "SDG Impact", to: "/sdg-impact" },
  { label: "Contact Us", to: "/about" },
];

const confLinks = [
  { label: "Upcoming Conferences", to: "/conferences" },
  { label: "Past Conferences", to: "/conferences" },
  { label: "Conference Calendar", to: "/conferences" },
  { label: "Call for Papers", to: "/associate-conference" },
  { label: "Submission Guidelines", to: "/associate-conference" },
];

const supportSdgIds = [4, 9, 11, 13, 17];

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: TwitterIcon, label: "Twitter" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: InstagramIcon, label: "Instagram" },
];

const sdgColors = {
  4: "#c5192d",
  9: "#fd6925",
  11: "#fd9d24",
  13: "#3f7e44",
  17: "#19486a",
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Innovation Conference logo" className="h-14 w-auto object-contain bg-white/95 rounded p-1" />
          <p className="mt-4 text-sm text-navy-200 leading-relaxed max-w-xs">
            Advancing research and innovation through high quality, pre-evaluated conferences with global impact.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brandGreen transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-navy-200 hover:text-brandGreen transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Conferences</h3>
          <ul className="space-y-2.5 text-sm">
            {confLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-navy-200 hover:text-brandGreen transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-white font-semibold mb-4 mt-8">Contact Us</h3>
          <ul className="space-y-2.5 text-sm text-navy-200">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-brandGreen shrink-0" />
              <a href="mailto:support@innovationconferences.org" className="hover:text-brandGreen">
                support@innovationconferences.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-brandGreen shrink-0" />
              <span>+91 12345 67890</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={15} className="text-brandGreen shrink-0" />
              <span>www.innovationconferences.org</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-brandGreen shrink-0" />
              <span>Worldwide</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">We Support</h3>
          <p className="text-sm text-navy-200 mb-3">Sustainable Development Goals</p>
          <div className="grid grid-cols-5 gap-2 max-w-[220px]">
            {supportSdgIds.map((id) => (
              <div
                key={id}
                className="w-10 h-10 rounded flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: sdgColors[id] }}
                aria-label={`SDG ${id}`}
              >
                {id}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-300">
          <p>&copy; {new Date().getFullYear()} Innovation Conferences. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
