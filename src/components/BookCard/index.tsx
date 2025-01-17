import { Text } from "@radix-ui/themes";
import { Book, BookOpen, Bookmark } from "@phosphor-icons/react";
import * as S from "./styles";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    genre: string;
    coverUrl: string;
    isRead: boolean;
  };
}

export function BookCard({ book }: BookCardProps) {
  return (
    <S.CardContainer>
      <S.CoverImage
        src={book.coverUrl || "https://placehold.co/200x300"}
        alt={book.title}
      />
      <S.BookInfo>
        <Text size="3" weight="bold">
          {book.title}
        </Text>
        <Text size="2" color="gray">
          {book.author}
        </Text>
        <S.GenreTag>{book.genre}</S.GenreTag>
      </S.BookInfo>
      <S.ActionButtons>
        <S.IconButton
          title={book.isRead ? "Marcar como não lido" : "Marcar como lido"}
        >
          {book.isRead ? <BookOpen size={20} /> : <Book size={20} />}
        </S.IconButton>
        <S.IconButton title="Adicionar aos favoritos">
          <Bookmark size={20} />
        </S.IconButton>
      </S.ActionButtons>
    </S.CardContainer>
  );
}
