import { useState, useEffect } from "react";
import { Button } from "@radix-ui/themes";
import * as S from "./addBookModal.styles";
import { useAuthors } from "../../hooks/useAuthors";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: {
    title: string;
    authorId: string;
    authorName: string;
    genre: string;
    pages: number;
  }) => void;
}

export function AddBookModal({
  isOpen,
  onClose,
  onAddBook,
}: AddBookModalProps) {
  const { authors } = useAuthors();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    authorId: "",
    authorName: "",
    genre: "",
    pages: "",
  });

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

  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAuthor = authors.find(
      (author) => author.id === Number(e.target.value)
    );

    setFormData({
      ...formData,
      authorId: e.target.value,
      authorName: selectedAuthor?.name || "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook({
      ...formData,
      authorId: formData.authorId,
      pages: Number(formData.pages),
    });
    setFormData({
      title: "",
      authorId: "",
      authorName: "",
      genre: "",
      pages: "",
    });
    onClose();
  };

  if (!isVisible && !isOpen) return null;

  return (
    <>
      <S.Overlay className={isOpen ? "open" : ""} onClick={onClose} />
      <S.ModalContent className={isOpen ? "open" : ""}>
        <h2>Adicionar novo livro</h2>
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
              <select
                id="author"
                value={formData.authorId}
                onChange={handleAuthorChange}
                required
              >
                <option value="">Selecione um autor</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
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
    </>
  );
}
