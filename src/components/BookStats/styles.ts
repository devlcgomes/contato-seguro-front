import styled from "styled-components";

export const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const IconWrapper = styled.div<{
  variant: "blue" | "green" | "purple" | "orange";
}>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) => {
    const colors = {
      blue: { bg: "#e6f0ff", color: "#1a73e8" },
      green: { bg: "#e6f8e6", color: "#34a853" },
      purple: { bg: "#f3e6ff", color: "#9c27b0" },
      orange: { bg: "#fff3e6", color: "#fb8c00" },
    };

    return `
      background-color: ${colors[variant].bg};
      color: ${colors[variant].color};
    `;
  }}
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StatTrend = styled.div<{ positive?: boolean }>`
  color: ${(props) => (props.positive ? "#34a853" : "#666")};
  font-size: 12px;
`;
