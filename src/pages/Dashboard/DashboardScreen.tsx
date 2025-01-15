import { Button, Text } from "@radix-ui/themes";
import * as S from "./dashboard.styles";
import { Sidebar } from "../../components/Sidebar";
import { BookStats } from "../../components/BookStats";
import { RecentBooks } from "../../components/RecentBooks";
import { BookGenreChart } from "../../components/BookGenreChart";
import { BookOpenUser } from "@phosphor-icons/react";

export default function DashboardScreen() {
  return (
    <S.DashboardContainer>
      <Sidebar />
      <S.MainContent>
        <S.Header>
          <S.SearchContainer>
            <input type="text" placeholder="Search" />
          </S.SearchContainer>
          <S.UserSection>{/* Ícones de tema e notificação */}</S.UserSection>
        </S.Header>

        <S.ContentArea>
          <S.TopSection>
            <Text size="6" weight="bold">
              Meus Livros
            </Text>
            <Button size="3">
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
      </S.MainContent>
    </S.DashboardContainer>
  );
}
