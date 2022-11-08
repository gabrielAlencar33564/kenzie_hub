import { useForm } from "react-hook-form";
import { useTechContextProps } from "../../contexts/techContext";
import {
  ConteinerModal,
  ModalHeader,
  Modal,
  ConteinerButtonsModal,
} from "./style";
import { IResponseTech } from "../../interfaces/tech";

function ModalEditTechs() {
  const { setOnModalEdit, editTechs, deleteTechs, element } = useTechContextProps();

  const { register, handleSubmit } = useForm<IResponseTech>();

  return (
    <ConteinerModal>
      <Modal>
        <ModalHeader>
          <h2>Tecnologia Detalhes</h2>

          <span onClick={() => setOnModalEdit(false)}>X</span>
        </ModalHeader>

        <form onSubmit={handleSubmit(editTechs)}>
          <label htmlFor="materialUi">Nome do projeto</label>
          <input
            type="text"
            id="materialUi"
            placeholder="Material UI"
            {...register("title")}
            value={element.title}
          />

          <label htmlFor="status">Status</label>
          <select {...register("status")} id="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <ConteinerButtonsModal>
            <button type="submit">Salvar alterações</button>
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteTechs(element.id);
                setOnModalEdit(false);
              }}
            >
              Excluir
            </button>
          </ConteinerButtonsModal>
        </form>
      </Modal>
    </ConteinerModal>
  );
}

export default ModalEditTechs;
