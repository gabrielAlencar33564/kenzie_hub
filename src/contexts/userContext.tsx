import {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataProps, IUserLogin, IUserResponse } from '../interfaces/user';
import { IAuthProvider, IUserContext } from '../interfaces/context';
import { IResponseTech } from "../interfaces/tech";

const UserContext = createContext<IUserContext>(
  {} as IUserContext,
);

const UserProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [loading, setLoading] = useState(true);
  const [techsList, setTechsList] = useState<IResponseTech[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("@TOKEN");
      const auth = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      };

      if (token !== null) {
        try {
          const { data } = await api.get<IUserResponse>(`/profile`, auth);
          setUser(data);
          setTechsList(data?.techs);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        }
      }
      setLoading(false);
    }
    load();
  }, [navigate]);

  const submit = async (event: IUserLogin) => {
    try {
      const response = await api.post<DataProps>("/sessions", event);
      const { user: responseUser, token } = response.data;

      setUser(responseUser);
      localStorage.setItem("@TOKEN", token);
      setIsAuthenticated(true);

      toast.success("Usuario logado com sucesso");
      navigate("/deshboard", { replace: true });
    } catch (error) {
      toast.error("Senha ou e-mail inválido");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        submit,
        loading,
        setUser,
        setLoading,
        techsList,
        setTechsList,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContextProps(): IUserContext {
  const context = useContext(UserContext);
  return context;
}

export default UserProvider;