import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 16px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    height: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
