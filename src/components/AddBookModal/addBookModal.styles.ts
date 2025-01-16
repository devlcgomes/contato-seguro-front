import styled from "styled-components";
import { colors } from "../../theme/colors";
import { Dialog } from "@radix-ui/themes";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: "red";
  }

  input {
    height: 40px;
    padding: 0 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: ${colors.primary};
      box-shadow: 0 0 0 1px ${colors.primary}40;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const ModalContent = styled(Dialog.Content)`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  [data-radix-dialog-title] {
    color: ${colors.text};
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 600;
  }
`;
