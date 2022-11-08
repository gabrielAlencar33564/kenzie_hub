import { useNavigate } from "react-router-dom";
import { DeshboardPage, DeshboardPageInfo, OnModal } from "./style";
import { motion } from "framer-motion";
import ModalRegister from "../../components/ModalRegister";
import ListTechs from "../../components/ListTechs";
import ModalEditTechs from "../../components/ModalEditTechs";
import { useUserContextProps } from "../../contexts/userContext";
import { useTechContextProps } from "../../contexts/techContext";
import { useState } from "react";

function Deshboard() {
  const { user, loading, setUser, techsList } = useUserContextProps();
  const { onModal, setOnModal, onModalEdit } = useTechContextProps();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const returnLogin = () => {
    localStorage.clear();
    setUser({});

    navigate("/login", { replace: true });
  };

  const filteredTechs =
    search.length > 0
      ? techsList.filter((elem) => elem.title.includes(search))
      : [];

  if (loading) return <div>Caregando...</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DeshboardPage>
        <header>
          <div>
            <h1>Kenzie Hub</h1>

            <button onClick={returnLogin}>Sair</button>
          </div>
        </header>

        <main>
          <DeshboardPageInfo>
            <h2>Olá, {user.name}</h2>

            <p>{user.course_module}</p>
          </DeshboardPageInfo>

          <OnModal>
            <h3>Tecnologias</h3>

            <div>
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <div onClick={() => setOnModal(true)}>
                <span>+</span>
              </div>
            </div>
          </OnModal>

          <ListTechs filteredTechs={filteredTechs} />
        </main>

        {onModal ? <ModalRegister /> : null}
        {onModalEdit ? <ModalEditTechs /> : null}
      </DeshboardPage>
    </motion.div>
  );
}

export default Deshboard;
