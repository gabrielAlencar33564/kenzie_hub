import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import { useNavigate } from "react-router-dom";
import { FormConteiner } from "./style";
import { toast } from "react-toastify";
import { IUserRegistration } from "../../interfaces/user";

function Registration() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("Deve ser e-mail"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "A senha precisa ter pelo menos uma letra maiúscula, uma minúscula, um dígito e um carácter",
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Confirmação precisa ser igual a senha"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegistration>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const envForm = async (event: IUserRegistration) => {
    const { confirmPassword, ...rest } = event;

    await api
      .post("/users", rest)
      .then(() => {
        navigate("/login", { replace: true });
        toast.success("Usuário criado com sucesso!");
      })
      .catch(() => {
        toast.error("Ops! Usuario já existente!");
      });
  };

  return (
    <FormConteiner>
      <h2>Crie sua conta</h2>

      <p>Rapido e grátis, vamos nessa</p>

      <form onSubmit={handleSubmit(envForm)}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirmação de senha"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Digite aqui sua biografia"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>

        <label htmlFor="contato">Contato</label>
        <input
          type="text"
          id="contato"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>

        <label htmlFor="courseModule">Selecionar módulo</label>
        <select {...register("course_module")} id="courseModule">
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
        </select>
        <span>{errors.course_module?.message}</span>

        <button type="submit">Cadastrar</button>
      </form>
    </FormConteiner>
  );
}

export default Registration;
