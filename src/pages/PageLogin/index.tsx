import Login from "../../components/Login";
import { ConteinerPageLogin } from "./style";
import { motion } from "framer-motion";

function PageLogin() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ConteinerPageLogin>
        <header>
          <h1>Kenzie Hub</h1>
        </header>

        <main>
          <Login />
        </main>
      </ConteinerPageLogin>
    </motion.div>
  );
}

export default PageLogin;
