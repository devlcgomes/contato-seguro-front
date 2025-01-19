import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@radix-ui/themes";
import { X } from "@phosphor-icons/react";
import * as S from "./addAuthorModal.styles";

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAuthor: (author: { name: string; email: string }) => void;
}

export function AddAuthorModal({
  isOpen,
  onClose,
  onAddAuthor,
}: AddAuthorModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAuthor({ name, email });
    setName("");
    setEmail("");
    onClose();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  if (!isVisible && !isOpen) return null;

  return (
    <>
      <S.Overlay className={isOpen ? "open" : ""} onClick={onClose} />
      <S.ModalContent className={isOpen ? "open" : ""}>
        <S.Header>
          <h2>Adicionar novo autor</h2>
          <Button variant="ghost" onClick={onClose}>
            <X size={24} />
          </Button>
        </S.Header>

        <form onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.InputWrapper>
              <label>Nome do autor</label>
              <S.Input
                type="text"
                placeholder="Digite o nome do autor"
                value={name}
                onChange={handleNameChange}
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label>Email</label>
              <S.Input
                type="email"
                placeholder="Digite o email do autor"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.ButtonsContainer>
            <Button variant="soft" color="gray" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" color="orange">
              Adicionar autor
            </Button>
          </S.ButtonsContainer>
        </form>
      </S.ModalContent>
    </>
  );
}
