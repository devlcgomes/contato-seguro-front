import styled from "styled-components";
import { Dialog } from "@radix-ui/themes";
import { colors } from "../../theme/colors";

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
      color: ${colors.text};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
