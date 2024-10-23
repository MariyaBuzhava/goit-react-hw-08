import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { motion } from "framer-motion";

const RegistrationPage = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Registration
      </motion.h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
