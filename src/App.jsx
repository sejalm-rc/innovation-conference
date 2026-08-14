import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Conferences from "./pages/Conferences";
import ConferenceDetails from "./pages/ConferenceDetails";
import SDGImpact from "./pages/SDGImpact";
import AssociateConference from "./pages/AssociateConference";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/conferences/:id" element={<ConferenceDetails />} />
          <Route path="/sdg-impact" element={<SDGImpact />} />
          <Route path="/associate-conference" element={<AssociateConference />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
