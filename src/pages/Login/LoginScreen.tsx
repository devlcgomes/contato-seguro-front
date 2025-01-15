import { useForm } from "react-hook-form";
import { Button, Text, Checkbox, TextField } from "@radix-ui/themes";
import * as S from "./login.styles";
import loginImg from "../../assets/loginImg.png";
import logoBook from "../../assets/logoBook.png";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginScreen() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Dados do login:", {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    });

    // Redireciona para o Dashboard
    navigate("/dashboard");
  };

  return (
    <S.LoginContainer>
      <S.LoginForm>
        <S.Logo src={logoBook} alt="Filuick Pay" />

        <Text size="5" weight="bold" mb="4">
          Seja bem-vindo!
        </Text>
        <Text size="2" color="gray" mb="6">
          Insira suas credenciais para acessar a plataforma
        </Text>

        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <TextField.Root
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              placeholder="Insira seu email"
            />
            {errors.email && (
              <Text size="1" color="red" mt="1">
                {errors.email.message}
              </Text>
            )}
          </S.InputContainer>

          <S.InputContainer>
            <TextField.Root
              type="password"
              {...register("password", {
                required: "Senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "Senha deve ter no mínimo 6 caracteres",
                },
              })}
              placeholder="Insira sua senha"
            />
            {errors.password && (
              <Text size="1" color="red" mt="1">
                {errors.password.message}
              </Text>
            )}
          </S.InputContainer>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Checkbox {...register("rememberMe")} />
              <Text size="2">Manter conectado por 30 dias</Text>
            </label>
            <Text size="2" color="blue" style={{ cursor: "pointer" }}>
              Esqueceu sua senha?
            </Text>
          </div>

          <Button
            type="submit"
            size="3"
            color="orange"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            Entrar
          </Button>

          <S.Divider>
            <span>Ou</span>
          </S.Divider>

          <S.SocialLoginContainer>
            <Button
              variant="soft"
              size="3"
              color="gray"
              style={{ width: "50%" }}
            >
              Entrar com Google
            </Button>
            <Button variant="soft" size="3" style={{ width: "50%" }}>
              Entrar com Facebook
            </Button>
          </S.SocialLoginContainer>

          <Text align="center" mt="8" size="2">
            Não tem uma conta?{" "}
            <Text color="blue" mt="4" style={{ cursor: "pointer" }}>
              Cadastre-se
            </Text>
          </Text>
        </S.FormContainer>
      </S.LoginForm>

      <S.WelcomeSection>
        <img src={loginImg} alt="Welcome" width={600} />
      </S.WelcomeSection>
    </S.LoginContainer>
  );
}
