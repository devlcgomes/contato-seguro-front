import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ChartCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s;
  }
`;
