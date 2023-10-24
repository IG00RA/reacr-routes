import { useAuth } from "../components/AuthProvider";
import { motion } from "framer-motion";

const Profile = () => {
  const { authState } = useAuth();

  if (!authState.isAuthenticated) {
    return <p>Для перегляду профілю авторизуйтесь.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Профіль користувача</h2>
      <p>Вітаємо: {authState.user.username}</p>
    </motion.div>
  );
};

export default Profile;
