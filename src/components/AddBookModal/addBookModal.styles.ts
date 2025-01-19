import styled, { keyframes } from "styled-components";
import { colors } from "../../theme/colors";
import { BaseModalContent } from "../../styles/modal.styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  z-index: 1001;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  &.open {
    opacity: 1;
    pointer-events: all;
    animation: ${slideIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:not(.open) {
    animation: ${slideOut} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

export const NoAuthorsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
  text-align: center;

  p {
    color: #666;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  &.open {
    opacity: 1;
    pointer-events: all;
    animation: ${fadeIn} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:not(.open) {
    animation: ${fadeOut} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
  }

  input, select {
    padding: 8px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #ff6b00;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;
