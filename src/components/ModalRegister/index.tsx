import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ConteinerModal, Modal } from "./style";
import { useTechContextProps } from "../../contexts/techContext";
import { ITech } from "../../interfaces/tech";

function ModalRegister() {
  const { setOnModal, postTechs } = useTechContextProps();

  const formSchema = yup.object().shape({
    title: yup.string().required("Material UI obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ConteinerModal>
      <Modal>
        <div>
          <h2>Cadastrar Tecnologia</h2>

          <span onClick={() => setOnModal(false)}>X</span>
        </div>

        <form onSubmit={handleSubmit(postTechs)}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Material UI"
            {...register("title")}
          />
          <span>{errors.title?.message}</span>

          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")} id="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </Modal>
    </ConteinerModal>
  );
}

export default ModalRegister;
