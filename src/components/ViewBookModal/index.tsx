import { Dialog } from "@radix-ui/themes";
import * as S from "./styles";
import { Book } from "../../types/Book";
import { BookOpen } from "@phosphor-icons/react";

interface ViewBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book | null;
}

export function ViewBookModal({ isOpen, onClose, book }: ViewBookModalProps) {
  if (!book) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Content style={{ maxWidth: 500 }}>
        <S.ModalHeader>
          <BookOpen size={24} weight="fill" />
          <Dialog.Title>Detalhes do Livro</Dialog.Title>
        </S.ModalHeader>

        <S.Content>
          <S.InfoGroup>
            <S.Label>Título</S.Label>
            <S.Value>{book.title}</S.Value>
          </S.InfoGroup>

          <S.InfoGroup>
            <S.Label>Autor</S.Label>
            <S.Value>{book.author}</S.Value>
          </S.InfoGroup>

          <S.InfoGroup>
            <S.Label>Gênero</S.Label>
            <S.Value>{book.genre}</S.Value>
          </S.InfoGroup>

          <S.InfoGroup>
            <S.Label>Páginas</S.Label>
            <S.Value>{book.pages}</S.Value>
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
