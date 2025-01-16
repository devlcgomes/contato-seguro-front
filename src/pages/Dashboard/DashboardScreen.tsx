import { Button, Text } from "@radix-ui/themes";
import * as S from "./dashboard.styles";
import { Sidebar } from "../../components/Sidebar";
import { BookStats } from "../../components/BookStats";
import { RecentBooks } from "../../components/RecentBooks";
import { BookGenreChart } from "../../components/BookGenreChart";
import { BookOpenUser } from "@phosphor-icons/react";
import { useBooks } from "../../hooks/useBooks";
import { AddBookModal } from "../../components/AddBookModal";

export default function DashboardScreen() {
  const { books, isModalOpen, setIsModalOpen, addBook } = useBooks();

  return (
    <S.DashboardContainer>
      <Sidebar />
      <S.MainContent>
        <S.ContentArea>
          <S.TopSection>
            <Text size="6" weight="bold">
              Meus Livros
            </Text>
            <Button size="3" onClick={() => setIsModalOpen(true)}>
              Adicionar novo livro
              <BookOpenUser />
            </Button>
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
        </S.ContentArea>

        <AddBookModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddBook={addBook}
        />
      </S.MainContent>
    </S.DashboardContainer>
  );
}
