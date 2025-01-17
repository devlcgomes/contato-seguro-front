import styled from "styled-components";
import { Dialog } from "@radix-ui/themes";
import { colors } from "../../theme/colors";
import { BaseModalContent } from "../../styles/modal.styles";

export const ModalContent = styled(BaseModalContent)`
  max-width: 400px;

  [data-radix-dialog-title] {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 600;
  }
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
