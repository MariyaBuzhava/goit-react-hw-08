import c from "./HomePage.module.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={c.homepage}
    >
      <div className={c.hero}>
        <h1 className={c.title}>Welcome to MyContacts</h1>
        <p className={c.description}>
          Easily manage all your contacts in one place. Add, find, or delete
          them with a single click!
        </p>
      </div>
    </motion.div>
  );
};

export default HomePage;
