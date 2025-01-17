import { styled } from "styled-components";
import { Books, Users, Hash, Clock } from "@phosphor-icons/react";

export const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-background);
`;

export const MainContent = styled.main`
  padding: 24px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid var(--gray-5);
  border-radius: 6px;
  width: 300px;
  background-color: var(--color-background-light);

  &::placeholder {
    color: var(--gray-9);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const StatCard = styled.div`
  background: var(--color-background-light);
  padding: 24px;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

interface IconWrapperProps {
  variant: "blue" | "green" | "purple" | "orange";
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    switch (props.variant) {
      case "blue":
        return "rgba(0, 136, 254, 0.1)";
      case "green":
        return "rgba(0, 196, 159, 0.1)";
      case "purple":
        return "rgba(136, 132, 216, 0.1)";
      case "orange":
        return "rgba(255, 128, 66, 0.1)";
      default:
        return "rgba(0, 0, 0, 0.1)";
    }
  }};

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => {
      switch (props.variant) {
        case "blue":
          return "#0088FE";
        case "green":
          return "#00C49F";
        case "purple":
          return "#8884d8";
        case "orange":
          return "#FF8042";
        default:
          return "#000000";
      }
    }};
  }
`;

export const GrowthIndicator = styled.span<{ positive: boolean }>`
  color: ${(props) => (props.positive ? "var(--green-9)" : "var(--red-9)")};
  font-size: 12px;
  display: block;
  margin-top: 4px;
`;

export const AnalyticsSection = styled.section`
  background: var(--color-background-light);
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const RecentBooksSection = styled.section`
  background: var(--color-background-light);
  padding: 24px;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid var(--gray-5);
  }

  th {
    color: var(--gray-11);
    font-weight: 500;
  }

  tbody tr {
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--gray-3);
    }
  }

  td {
    color: var(--gray-11);
  }
`;

// Ícones estilizados
export const BookIcon = styled(Books)``;
export const AuthorIcon = styled(Users)``;
export const GenreIcon = styled(Hash)``;
export const RecentIcon = styled(Clock)``;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

export const ChartCard = styled.div<{ fullWidth?: boolean }>`
  background: var(--color-background-light);
  padding: 24px;
  border-radius: 8px;
`;

export const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

export const TableCard = styled.div`
  background: var(--color-background-light);
  padding: 24px;
  border-radius: 8px;
`;
