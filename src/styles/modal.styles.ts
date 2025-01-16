import styled from "styled-components";
import { Dialog } from "@radix-ui/themes";

export const BaseModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: none !important; // Desabilita a animação padrão do Radix

  &[data-state="open"] {
    animation: none !important;
  }
`;
