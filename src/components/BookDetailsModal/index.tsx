import { Dialog, Button } from "@radix-ui/themes";
import * as S from "./styles";
import { Book, User, BookOpen, Hash } from "@phosphor-icons/react";

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    title: string;
    authorName: string;
    genre: string;
    pages: number;
  } | null;
}

export function BookDetailsModal({
  isOpen,
  onClose,
  book,
}: BookDetailsModalProps) {
  if (!book) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <S.ModalContent>
        <Dialog.Title>Detalhes do Livro</Dialog.Title>
        <S.Content>
          <S.InfoItem>
            <Book size={20} />
            <div>
              <strong>Título</strong>
              <p>{book.title}</p>
            </div>
          </S.InfoItem>

          <S.InfoItem>
            <User size={20} />
            <div>
              <strong>Autor</strong>
              <p>{book.authorName}</p>
            </div>
          </S.InfoItem>

          <S.InfoItem>
            <BookOpen size={20} />
            <div>
              <strong>Gênero</strong>
              <p>{book.genre}</p>
            </div>
          </S.InfoItem>

          <S.InfoItem>
            <Hash size={20} />
            <div>
              <strong>Páginas</strong>
              <p>{book.pages}</p>
            </div>
          </S.InfoItem>
        </S.Content>

        <S.ButtonsContainer>
          <Button onClick={onClose} color="gray">
            Fechar
          </Button>
        </S.ButtonsContainer>
      </S.ModalContent>
    </Dialog.Root>
  );
}
