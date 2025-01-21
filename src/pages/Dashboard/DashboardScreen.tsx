import React, { useState } from "react";
import { Flex, Text, Button } from "@radix-ui/themes";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { useStatistics } from "../../hooks/useStatistics";
import * as S from "./dashboard.styles";
import { Plus, Eye, Trash } from "@phosphor-icons/react";
import { AddBookModal } from "../../components/AddBookModal";
import { AddAuthorModal } from "../../components/AddAuthorModal";
import { useBooks } from "../../hooks/useBooks";
import { useAuthors } from "../../hooks/useAuthors";
import { ViewBookModal } from "../../components/ViewBookModal";
import { Book } from "../../types/Book";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface RecentBook extends Book {
  authorName: string;
}

const DashboardScreen: React.FC = () => {
  const { booksByGenre, totalBooks, totalAuthors, monthlyBooks, recentBooks } =
    useStatistics();
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const { addBook, deleteBook } = useBooks();
  const { addAuthor } = useAuthors();
  const [selectedBook, setSelectedBook] = useState<RecentBook | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleOpenBookModal = () => {
    setIsBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsBookModalOpen(false);
  };

  const handleOpenAuthorModal = () => {
    setIsAuthorModalOpen(true);
  };

  const handleCloseAuthorModal = () => {
    setIsAuthorModalOpen(false);
  };

  const handleViewBook = (bookId: string) => {
    const book = recentBooks.find((b) => b.id === bookId);
    if (book) {
      setSelectedBook(book);
      setIsViewModalOpen(true);
    }
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedBook(null);
  };

  const handleDeleteBook = (bookId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este livro?")) {
      deleteBook(bookId);
    }
  };

  return (
    <S.DashboardContainer>
      <S.MainContent>
        <S.Header>
          <Text size="5" weight="bold">
            Meus Livros
          </Text>
          <Flex gap="3">
            <Button
              color="orange"
              size="3"
              variant="solid"
              onClick={handleOpenBookModal}
            >
              <Plus />
              Adicionar novo livro
            </Button>
            <Button
              color="orange"
              size="3"
              variant="solid"
              onClick={handleOpenAuthorModal}
            >
              <Plus />
              Adicionar autor
            </Button>
          </Flex>
        </S.Header>

        <S.StatsGrid>
          <S.StatCard>
            <S.IconWrapper variant="blue">
              <S.BookIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>{totalBooks}</S.StatValue>
              <S.StatLabel>Total de livros</S.StatLabel>
              <S.GrowthIndicator positive>na biblioteca</S.GrowthIndicator>
            </S.StatContent>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="green">
              <S.AuthorIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>{totalAuthors}</S.StatValue>
              <S.StatLabel>Autores</S.StatLabel>
              <S.GrowthIndicator positive>
                criados na plataforma
              </S.GrowthIndicator>
            </S.StatContent>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="purple">
              <S.GenreIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>{booksByGenre.length}</S.StatValue>
              <S.StatLabel>Gêneros</S.StatLabel>
              <S.GrowthIndicator positive>
                criados na plataforma
              </S.GrowthIndicator>
            </S.StatContent>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="orange">
              <S.RecentIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>8</S.StatValue>
              <S.StatLabel>Livros recentes</S.StatLabel>
              <S.GrowthIndicator positive>
                adicionados na plataforma
              </S.GrowthIndicator>
            </S.StatContent>
          </S.StatCard>
        </S.StatsGrid>

        <S.ChartsGrid>
          <S.ChartCard>
            <Text size="4" weight="bold" mb="4">
              Distribuição por Gênero
            </Text>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={booksByGenre}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {booksByGenre.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </S.ChartCard>

          <S.ChartCard>
            <Text size="4" weight="bold" mb="4">
              Livros por Gênero
            </Text>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={booksByGenre}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </S.ChartCard>

          <S.ChartCard>
            <Text size="4" weight="bold" mb="4">
              Livros Adicionados por Mês
            </Text>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyBooks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ fill: "#8884d8" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </S.ChartCard>
        </S.ChartsGrid>

        <S.TableCard>
          <Text size="4" weight="bold" mb="4">
            Livros Recentes
          </Text>
          <S.Table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Gênero</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {(recentBooks as RecentBook[]).map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.authorName}</td>
                  <td>{book.genre}</td>
                  <td>
                    <S.ActionButtons>
                      <S.ActionButton
                        title="Visualizar"
                        onClick={() => handleViewBook(book.id)}
                      >
                        <Eye size={20} />
                      </S.ActionButton>
                      <S.ActionButton
                        title="Excluir"
                        variant="danger"
                        onClick={() => handleDeleteBook(book.id)}
                      >
                        <Trash size={20} />
                      </S.ActionButton>
                    </S.ActionButtons>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableCard>
      </S.MainContent>

      <AddBookModal
        isOpen={isBookModalOpen}
        onClose={handleCloseBookModal}
        onAddBook={addBook}
      />

      <AddAuthorModal
        isOpen={isAuthorModalOpen}
        onClose={handleCloseAuthorModal}
        onAddAuthor={addAuthor}
      />

      <ViewBookModal
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        book={selectedBook}
      />
    </S.DashboardContainer>
  );
};

export default DashboardScreen;
