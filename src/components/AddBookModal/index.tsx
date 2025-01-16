import { useState } from "react";
import { Button, Dialog } from "@radix-ui/themes";
import * as S from "./addBookModal.styles";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: {
    title: string;
    author: string;
    genre: string;
    pages: number;
  }) => void;
}

export function AddBookModal({
  isOpen,
  onClose,
  onAddBook,
}: AddBookModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    pages: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook({
      ...formData,
      pages: Number(formData.pages),
    });
    setFormData({ title: "", author: "", genre: "", pages: "" });
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <S.ModalContent>
        <Dialog.Title>Adicionar novo livro</Dialog.Title>
        <S.FormContainer onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.InputWrapper>
              <label htmlFor="title">Título do livro</label>
              <input
                id="title"
                placeholder="Digite o título do livro"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label htmlFor="author">Autor</label>
              <input
                id="author"
                placeholder="Digite o nome do autor"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label htmlFor="genre">Gênero</label>
              <input
                id="genre"
                placeholder="Digite o gênero do livro"
                value={formData.genre}
                onChange={(e) =>
                  setFormData({ ...formData, genre: e.target.value })
                }
                required
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <label htmlFor="pages">Número de páginas</label>
              <input
                id="pages"
                type="number"
                placeholder="Digite o número de páginas"
                value={formData.pages}
                onChange={(e) =>
                  setFormData({ ...formData, pages: e.target.value })
                }
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
