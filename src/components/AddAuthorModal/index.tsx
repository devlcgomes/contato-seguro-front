import { useState } from "react";
import { Button, Dialog } from "@radix-ui/themes";
import * as S from "./addAuthorModal.styles";

interface AddAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAuthor: (author: {
    name: string;
    birthDate: string;
    nationality: string;
    biography: string;
  }) => void;
}

export function AddAuthorModal({
  isOpen,
  onClose,
  onAddAuthor,
}: AddAuthorModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    nationality: "",
    biography: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAuthor(formData);
    setFormData({ name: "", birthDate: "", nationality: "", biography: "" });
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <S.ModalContent>
        <Dialog.Title>Adicionar novo autor</Dialog.Title>
        <S.FormContainer onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.InputWrapper>
              <label htmlFor="name">Nome do autor</label>
              <input
                id="name"
                placeholder="Digite o nome do autor"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label htmlFor="birthDate">Data de nascimento</label>
              <input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) =>
                  setFormData({ ...formData, birthDate: e.target.value })
                }
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label htmlFor="nationality">Nacionalidade</label>
              <input
                id="nationality"
                placeholder="Digite a nacionalidade"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label htmlFor="biography">Biografia</label>
              <textarea
                id="biography"
                placeholder="Digite uma breve biografia"
                value={formData.biography}
                onChange={(e) =>
                  setFormData({ ...formData, biography: e.target.value })
                }
                rows={4}
                required
              />
            </S.InputWrapper>
          </S.InputGroup>

          <S.ButtonsContainer>
            <Button color="orange" type="submit">
              Salvar
            </Button>
            <Button type="button" onClick={onClose} color="gray">
              Cancelar
            </Button>
          </S.ButtonsContainer>
        </S.FormContainer>
      </S.ModalContent>
    </Dialog.Root>
  );
}
