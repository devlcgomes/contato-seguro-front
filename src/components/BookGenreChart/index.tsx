import { Text } from "@radix-ui/themes";
import * as S from "./styles";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { books } from "../../data/mockup";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Dados simulados para os gráficos
const monthlyData = [
  { month: "Jan", books: 4 },
  { month: "Fev", books: 3 },
  { month: "Mar", books: 6 },
  { month: "Abr", books: 8 },
  { month: "Mai", books: 7 },
  { month: "Jun", books: 10 },
];

const genreData = [
  { genre: "Ficção", count: 15 },
  { genre: "Romance", count: 10 },
  { genre: "Técnico", count: 8 },
  { genre: "Aventura", count: 12 },
];

export function BookGenreChart() {
  return (
    <S.ChartGrid>  <S.ChartCard>
        <Text size="3" weight="bold" mb="4">
          Distribuição por Gênero
        </Text>
        <PieChart width={400} height={200}>
          <Pie
            data={genreData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            nameKey="genre"
            label={({ name, percent }) => 
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {genreData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </S.ChartCard>  <S.ChartCard>
        <Text size="3" weight="bold" mb="4">
          Livros por Gênero
        </Text>
        <BarChart width={400} height={200} data={genreData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="genre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </S.ChartCard>

      <S.ChartCard>
        <Text size="3" weight="bold" mb="4">
          Livros Adicionados por Mês
        </Text>
        <LineChart width={400} height={200} data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="books"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </S.ChartCard>

    
    
    </S.ChartGrid>
  );
}
