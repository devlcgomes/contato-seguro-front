import styled from "styled-components";
import { Dialog } from "@radix-ui/themes";
import { colors } from "../../theme/colors";

export const ModalContent = styled(Dialog.Content)`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  svg {
    color: ${colors.primary};
  }

  [data-radix-dialog-title] {
    color: ${colors.text};
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Description = styled(Dialog.Description)`
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
