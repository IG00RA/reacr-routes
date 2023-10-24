import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "./Projects";
import ProjectsDetails from "./ProjectsDetails";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
