import styled from "styled-components";
import { colors } from "../../theme/colors";
import { BaseModalContent } from "../../styles/modal.styles";

export const ModalContent = styled(BaseModalContent)`
  max-width: 500px;

  [data-radix-dialog-title] {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;

  svg {
    color: ${colors.primary};
    margin-top: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-size: 14px;
      color: #64748b;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
