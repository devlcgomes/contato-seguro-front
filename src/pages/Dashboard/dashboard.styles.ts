import styled from "styled-components";
import { colors } from "../../theme/colors";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f6fa;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: white;
  border-radius: 12px;
  margin-bottom: 24px;
`;

export const SearchContainer = styled.div`
  input {
    padding: 8px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 300px;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContentArea = styled.div`
  padding: 20px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  button {
    padding: 8px 16px;
    background: ${colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 24px;
`;

export const ChartSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 24px;
`;

export const RecentSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
