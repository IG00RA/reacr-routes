import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ color: "red" }}>Вибачте, але сторінки не знайдено:</div>
      <br />
      <NavLink to="/" end>
        Повернутися на Головну
      </NavLink>
    </motion.div>
  );
};

export default NotFound;
