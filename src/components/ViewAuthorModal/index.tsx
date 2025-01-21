import { Dialog } from "@radix-ui/themes";
import * as S from "./styles";
import { Author } from "../../types/author";
import { UserCircle } from "@phosphor-icons/react";
import { useLibrary } from "../../contexts/LibraryContext";
import { useMemo } from "react";

interface ViewAuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  author: Author | null;
}

export function ViewAuthorModal({
  isOpen,
  onClose,
  author,
}: ViewAuthorModalProps) {
  const { books } = useLibrary();

  const authorBooks = useMemo(() => {
    if (!author) return [];
    return books.filter((book) => book.authorId === author.id);
  }, [author, books]);

  if (!author) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Content style={{ maxWidth: 500 }}>
        <S.ModalHeader>
          <UserCircle size={24} weight="fill" />
          <Dialog.Title>Detalhes do Autor</Dialog.Title>
        </S.ModalHeader>

        <S.Content>
          <S.InfoGroup>
            <S.Label>Nome</S.Label>
            <S.Value>{author.name}</S.Value>
          </S.InfoGroup>

          <S.InfoGroup>
            <S.Label>Email</S.Label>
            <S.Value>{author.email}</S.Value>
          </S.InfoGroup>

          <S.InfoGroup>
            <S.Label>Livros Cadastrados</S.Label>
            {authorBooks.length > 0 ? (
              <S.BooksList>
                {authorBooks.map((book) => (
                  <S.BookItem key={book.id}>
                    {book.title} - {book.genre}
                  </S.BookItem>
                ))}
              </S.BooksList>
            ) : (
              <S.Value>Nenhum livro cadastrado</S.Value>
            )}
          </S.InfoGroup>
        </S.Content>

        <S.Footer>
          <Dialog.Close>
            <S.CloseButton>Fechar</S.CloseButton>
          </Dialog.Close>
        </S.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
