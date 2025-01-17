import { Button, Text } from "@radix-ui/themes";
import * as S from "./dashboard.styles";
import { BookStats } from "../../components/BookStats";
import { RecentBooks } from "../../components/RecentBooks";
import { BookGenreChart } from "../../components/BookGenreChart";
import { BookOpenUser, UserPlus } from "@phosphor-icons/react";
import { useBooks } from "../../hooks/useBooks";
import { useAuthors } from "../../hooks/useAuthors";
import { AddBookModal } from "../../components/AddBookModal";
import { AddAuthorModal } from "../../components/AddAuthorModal";

export default function DashboardScreen() {
  const { books, isModalOpen, setIsModalOpen, addBook } = useBooks();
  const { authors, isAuthorModalOpen, setIsAuthorModalOpen, addAuthor } =
    useAuthors();

  return (
    <S.ContentArea>
      <S.TopSection>
        <Text size="6" weight="bold">
          Meus Livros
        </Text>
        <S.ButtonGroup>
          <Button size="3" onClick={() => setIsModalOpen(true)}>
            Adicionar novo livro
            <BookOpenUser />
          </Button>
          <Button
            size="3"
            variant="soft"
            onClick={() => setIsAuthorModalOpen(true)}
          >
            Adicionar autor
            <UserPlus />
          </Button>
        </S.ButtonGroup>
      </S.TopSection>

      <S.StatsGrid>
        <BookStats />
      </S.StatsGrid>

      <S.ChartSection>
        <BookGenreChart />
      </S.ChartSection>

      <S.RecentSection>
        <Text size="5" weight="bold">
          Recent Books
        </Text>
        <RecentBooks />
      </S.RecentSection>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={addBook}
      />

      <AddAuthorModal
        isOpen={isAuthorModalOpen}
        onClose={() => setIsAuthorModalOpen(false)}
        onAddAuthor={addAuthor}
      />
    </S.ContentArea>
  );
}
