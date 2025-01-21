import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const QuoteIcon = styled.div`
  display: none;
`;

export const Content = styled.div`
  text-align: center;
  width: 100%;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Quote = styled.p`
  font-size: 0.875rem;
  color: var(--gray-12);
  line-height: 1.4;
  margin-bottom: 0.25rem;
  font-style: italic;
`;

export const Author = styled.p`
  font-size: 0.75rem;
  color: var(--gray-11);
  font-weight: 500;
`;

export const Dots = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.active ? "var(--orange-9)" : "var(--gray-6)"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--orange-10)" : "var(--gray-8)"};
  }
`;
