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
import { Plus, Eye, Trash } from "@phosphor-icons/react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardScreen: React.FC = () => {
  const {
    booksByGenre,
    booksByAuthor,
    totalBooks,
    totalAuthors,
    monthlyBooks,
    recentBooks,
  } = useStatistics();

  return (
    <S.DashboardContainer>
      <S.MainContent>
        <S.Header>
          <Text size="5" weight="bold">
            Meus Livros
          </Text>
          <Flex gap="3">
            <Button color="orange" size="3" variant="solid">
              <Plus />
              Adicionar novo livro
            </Button>
            <Button color="orange" size="3" variant="solid">
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
              <S.StatLabel>Total Books</S.StatLabel>
              <S.GrowthIndicator positive>
                +12% from last month
              </S.GrowthIndicator>
            </S.StatContent>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="green">
              <S.AuthorIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>{totalAuthors}</S.StatValue>
              <S.StatLabel>Authors</S.StatLabel>
              <S.GrowthIndicator positive>
                +5% from last month
              </S.GrowthIndicator>
            </S.StatContent>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="purple">
              <S.GenreIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>{booksByGenre.length}</S.StatValue>
              <S.StatLabel>Genres</S.StatLabel>
              <S.StatLabel>Same as last month</S.StatLabel>
            </S.StatContent>
          </S.StatCard>

          <S.StatCard>
            <S.IconWrapper variant="orange">
              <S.RecentIcon weight="fill" />
            </S.IconWrapper>
            <S.StatContent>
              <S.StatValue>8</S.StatValue>
              <S.StatLabel>Recent Added</S.StatLabel>
              <S.GrowthIndicator positive>+3 this week</S.GrowthIndicator>
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
              {recentBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.authorName}</td>
                  <td>{book.genre}</td>
                  <td>
                    <S.ActionButtons>
                      <S.ActionButton title="View">
                        <Eye size={20} />
                      </S.ActionButton>
                      <S.ActionButton title="Delete" variant="danger">
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
    </S.DashboardContainer>
  );
};

export default DashboardScreen;
