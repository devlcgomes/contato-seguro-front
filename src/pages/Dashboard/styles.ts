import styled from "styled-components";

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
