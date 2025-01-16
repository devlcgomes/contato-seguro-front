import { List } from "@phosphor-icons/react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

interface ToggleButtonProps {
  onClick: () => void;
}

export function ToggleButton({ onClick }: ToggleButtonProps) {
  return (
    <Button onClick={onClick}>
      <List size={24} />
    </Button>
  );
} 