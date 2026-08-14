import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ConferenceCard({ conference, index = 0 }) {
  const { id, image, dateLabel, mode, city, country, acronym, title, status } = conference;
  const parts = dateLabel.split(" ");
  const dayRange = parts[0];
  const monthYear = parts.slice(1).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        to={`/conferences/${id}`}
        className="group block bg-white rounded-xl overflow-hidden shadow-card hover:shadow-cardHover transition-shadow duration-300 border border-navy-100 h-full"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={`${acronym} cover`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-brandGreen text-white text-xs font-bold px-2.5 py-1.5 rounded leading-tight text-center">
            <div>{dayRange}</div>
            <div className="text-[10px] font-semibold">{monthYear}</div>
          </div>
          {status === "completed" && (
            <div className="absolute top-3 right-3 bg-navy-900/90 text-white text-[11px] font-semibold px-2 py-1 rounded">
              Completed
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="flex items-center gap-1 text-xs text-navy-500 mb-1.5">
            <MapPin size={13} className="text-brandGreen" />
            {mode} &middot; {city}, {country}
          </p>
          <h3 className="font-bold text-navy-900 text-sm leading-snug line-clamp-2">
            {title} ({acronym})
          </h3>
          <span className="badge-pill bg-navy-50 text-navy-700 mt-3">Scopus Indexed Proceedings</span>
        </div>
      </Link>
    </motion.div>
  );
}
