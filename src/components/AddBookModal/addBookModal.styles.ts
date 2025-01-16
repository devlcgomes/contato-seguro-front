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
    color: ${colors.text};
  }

  input,
  select {
    height: 40px;
    padding: 0 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.2s;
    background-color: white;
    color: ${colors.text};

    &:focus {
      outline: none;
      border-color: ${colors.primary};
      box-shadow: 0 0 0 1px ${colors.primary}40;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }

  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;

    option {
      color: ${colors.text};
      background: white;
      padding: 12px 16px;
      font-size: 14px;
    }

    &:invalid {
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
