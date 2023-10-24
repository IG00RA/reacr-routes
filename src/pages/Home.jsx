import Projects from "../components/Projects";
import About from "./About";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        <About />
        <h2>Наші Проєкти</h2>
        <Projects />
      </main>
    </motion.div>
  );
};

export default Home;
