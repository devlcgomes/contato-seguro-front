import { useState } from "react";
import { Button, Text, Checkbox, TextField } from "@radix-ui/themes";
import * as S from "./login.styles";
import loginImg from "../../assets/loginImg.png";
import logoBook from "../../assets/logoBook.png";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login aqui
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

        <S.FormContainer onSubmit={handleSubmit}>
          <S.InputContainer>
            <TextField.Root
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputContainer>

          <S.InputContainer>
            <TextField.Root
              size="3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              <Checkbox
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Text size="2">Remember for 30 Days</Text>
            </label>
            <Text size="2" color="blue" style={{ cursor: "pointer" }}>
              Forgot password
            </Text>
          </div>

          <Button size="3" style={{ width: "100%", marginBottom: "1rem" }}>
            Sign in
          </Button>

          <S.Divider>
            <span>OR</span>
          </S.Divider>

          <S.SocialLoginContainer>
            <Button variant="outline" size="3" style={{ width: "50%" }}>
              Sign up with Google
            </Button>
            <Button variant="outline" size="3" style={{ width: "50%" }}>
              Sign up with Facebook
            </Button>
          </S.SocialLoginContainer>

          <Text align="center" mt="4" size="2">
            Don't have an account?{" "}
            <Text color="blue" style={{ cursor: "pointer" }}>
              Sign up
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
