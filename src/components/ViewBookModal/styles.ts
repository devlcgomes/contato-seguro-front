import styled from "styled-components";
import { Button } from "@radix-ui/themes";

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray-5);

  svg {
    color: var(--orange-9);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-12);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0.5rem;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-11);
`;

export const Value = styled.span`
  font-size: 1rem;
  color: var(--gray-12);
  font-weight: 500;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-5);
`;

export const CloseButton = styled(Button)`
  &[data-accent-color] {
    background-color: var(--gray-4);
    color: var(--gray-11);
    font-weight: 500;

    &:hover {
      background-color: var(--gray-5);
    }
  }
`;
