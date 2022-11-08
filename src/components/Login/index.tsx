import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContextProps } from "../../contexts/userContext";
import { FormLogin } from "./style";
import { IUserLogin } from "../../interfaces/user";

function Login() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("Deve ser e-mail"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  const { submit } = useUserContextProps();

  return (
    <FormLogin>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <button type="submit">Entrar</button>
      </form>

      <p>Ainda não possui uma conta?</p>

      <Link to="/cadastrar">Cadastre-se</Link>
    </FormLogin>
  );
}

export default Login;
