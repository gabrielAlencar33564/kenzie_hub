import Registration from "../../components/Registration";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ConteinerPageRegistration } from "./style"

function PageRegistration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ConteinerPageRegistration>
        <header>
          <div>
            <h1>Kenzie Hub</h1>
            <Link to="/login">Voltar</Link>
          </div>
        </header>

        <main>
          <Registration />
        </main>
      </ConteinerPageRegistration>
    </motion.div>
  );
}

export default PageRegistration;
