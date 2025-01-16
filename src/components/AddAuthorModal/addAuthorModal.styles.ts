import styled from "styled-components";
import { Dialog } from "@radix-ui/themes";
import { colors } from "../../theme/colors";
import { BaseModalContent } from "../../styles/modal.styles";

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
  textarea {
    padding: 8px 16px;
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

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const ModalContent = styled(BaseModalContent)`
  max-width: 500px;

  [data-radix-dialog-title] {
    color: ${colors.text};
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 600;
  }
`;
