import { styled } from "styled-components";
import { Books, Users, Hash, Quotes } from "@phosphor-icons/react";

export const DashboardContainer = styled.div`
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
  padding: 16px;
  border-radius: 10px;
  display: flex;
  gap: 16px;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  border: 1px solid var(--gray-4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StatValue = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  color: var(--gray-12);
  margin-bottom: 4px;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: var(--gray-11);
  margin-bottom: 4px;
`;

interface IconWrapperProps {
  variant: "blue" | "green" | "purple" | "orange";
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 44px;
  height: 44px;
  border-radius: 10px;
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
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.positive ? "var(--green-9)" : "var(--red-9)"};
  }
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
export const RecentIcon = styled(Quotes)``;

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

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

interface ActionButtonProps {
  variant?: "danger";
}

export const ActionButton = styled.button<ActionButtonProps>`
  background: none;
  border: none;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.variant === "danger" ? "var(--red-9)" : "var(--gray-11)"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.variant === "danger" ? "var(--red-3)" : "var(--gray-3)"};
    color: ${(props) =>
      props.variant === "danger" ? "var(--red-11)" : "var(--gray-12)"};
  }
`;

export const TableCard = styled.div`
  background: var(--color-background-light);
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 32px;
`;
