import LoginForm from "../../components/LoginForm/LoginForm";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Login
      </motion.h1>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
