import React from "react";
import { Box, Container, Flex, Text, Button } from "@radix-ui/themes";
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
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const DashboardScreen: React.FC = () => {
  const {
    booksByGenre,
    booksByAuthor,
    totalBooks,
    totalAuthors,
    monthlyBooks,
    recentBooks,
    recentAuthors,
  } = useStatistics();

  return (
    <S.DashboardContainer>
      <S.MainContent>
        <S.Header>
          <Text size="5" weight="bold">
            My Books
          </Text>
          <S.SearchContainer>
            <Flex gap="3" align="center">
              <S.SearchInput type="text" placeholder="Search" />
              <Button variant="solid">
                <Plus />
                Add New
              </Button>
            </Flex>
          </S.SearchContainer>
        </S.Header>

        <S.StatsGrid>
          <S.StatCard>
            <S.IconWrapper variant="blue">
              <S.BookIcon weight="fill" />
            </S.IconWrapper>
            <Box>
              <Text size="5" weight="bold">
                {totalBooks}
              </Text>
              <Text color="gray" size="2">
                Total Books
              </Text>
              <S.GrowthIndicator positive>
                +12% from last month
              </S.GrowthIndicator>
            </Box>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="green">
              <S.AuthorIcon weight="fill" />
            </S.IconWrapper>
            <Box>
              <Text size="5" weight="bold">
                {totalAuthors}
              </Text>
              <Text color="gray" size="2">
                Authors
              </Text>
              <S.GrowthIndicator positive>
                +5% from last month
              </S.GrowthIndicator>
            </Box>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="purple">
              <S.GenreIcon weight="fill" />
            </S.IconWrapper>
            <Box>
              <Text size="5" weight="bold">
                {booksByGenre.length}
              </Text>
              <Text color="gray" size="2">
                Genres
              </Text>
              <Text color="gray" size="2">
                Same as last month
              </Text>
            </Box>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="orange">
              <S.RecentIcon weight="fill" />
            </S.IconWrapper>
            <Box>
              <Text size="5" weight="bold">
                8
              </Text>
              <Text color="gray" size="2">
                Recent Added
              </Text>
              <S.GrowthIndicator positive>+3 this week</S.GrowthIndicator>
            </Box>
          </S.StatCard>
        </S.StatsGrid>

        <S.ChartsGrid>
          {/* Gráfico de Gêneros */}
          <S.ChartCard>
            <Text size="5" weight="bold" mb="4">
              Books by Genre
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
                  {booksByGenre.map((entry, index) => (
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

          {/* Gráfico de Autores */}
          <S.ChartCard>
            <Text size="5" weight="bold" mb="4">
              Top Authors
            </Text>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={booksByAuthor.slice(0, 5)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </S.ChartCard>

          {/* Gráfico de Tendência */}
          <S.ChartCard>
            <Text size="5" weight="bold" mb="4">
              Books Added Over Time
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
                />
              </LineChart>
            </ResponsiveContainer>
          </S.ChartCard>
        </S.ChartsGrid>

        <S.TablesGrid>
          {/* Tabela de Livros Recentes */}
          <S.TableCard>
            <Text size="5" weight="bold" mb="4">
              Recent Books
            </Text>
            <S.Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Pages</th>
                  <th>Added Date</th>
                </tr>
              </thead>
              <tbody>
                {recentBooks.map((book) => (
                  <tr key={book.id}>
                    <td>{book.name}</td>
                    <td>{book.authorName}</td>
                    <td>{book.pages}</td>
                    <td>
                      {new Date(book.addedDate).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableCard>

          {/* Tabela de Autores Recentes */}
          <S.TableCard>
            <Text size="5" weight="bold" mb="4">
              Recent Authors
            </Text>
            <S.Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Books</th>
                  <th>Added Date</th>
                </tr>
              </thead>
              <tbody>
                {recentAuthors.map((author) => (
                  <tr key={author.id}>
                    <td>{author.name}</td>
                    <td>{author.booksCount}</td>
                    <td>
                      {new Date(author.addedDate).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableCard>
        </S.TablesGrid>
      </S.MainContent>
    </S.DashboardContainer>
  );
};

export default DashboardScreen;
