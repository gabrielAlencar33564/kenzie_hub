/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useState,
  useContext,
} from "react";
import api from "../services";
import { toast } from "react-toastify";
import { IAuthProvider, ITechContext } from "../interfaces/context";

import { useUserContextProps } from "./userContext";
import { IResponseTech, ITech } from "../interfaces/tech";

const TechContext = createContext<ITechContext>(
  {} as ITechContext,
);

function TechProvider({ children }: IAuthProvider) {
  const { setTechsList } = useUserContextProps();
  const [onModal, setOnModal] = useState(Boolean);
  const [onModalEdit, setOnModalEdit] = useState(Boolean);
  const [element, setElement] = useState<IResponseTech>(
    {} as IResponseTech,
  );

  const auth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
    },
  };

  async function getProfile(): Promise<void> {
    if (localStorage.getItem("@TOKEN")) {
      try {
        const { data } = await api.get(`/profile`, auth);
        setTechsList(data?.techs);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const postTechs = (data: ITech) => {
    api
      .post<IResponseTech>("/users/techs", data, auth)
      .then(() => {
        getProfile();
        setOnModal(false);
        toast.success("Tecnologia adicionada");
      })
      .catch((erro) => {
        toast.error("Já existe uma tecnologia com esse nome");
        console.log(erro);
      });
  };

  const deleteTechs = (id: string | number) => {
    api
      .delete(`/users/techs/${id}`, auth)
      .then(() => {
        getProfile();
        toast.success("Tecnologia deletada");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editTechs = (data: ITech) => {
    api
      .put<IResponseTech>(`/users/techs/${element.id}`, data, auth)
      .then(() => {
        getProfile();
        setOnModalEdit(false);
        toast.success("Tecnologia editada");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TechContext.Provider
      value={{
        onModal,
        setOnModal,
        postTechs,
        deleteTechs,
        setOnModalEdit,
        editTechs,
        onModalEdit,
        setElement,
        element,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export function useTechContextProps(): ITechContext {
  const context = useContext(TechContext);
  return context;
}

export default TechProvider;