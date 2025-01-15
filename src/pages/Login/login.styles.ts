import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LoginForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: white;
`;

export const WelcomeSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    margin: 0 1rem;
    color: #666;
  }
`;
