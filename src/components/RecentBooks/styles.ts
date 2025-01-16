import styled from "styled-components";
import { colors } from "../../theme/colors";

export const Container = styled.div`
  margin-top: 16px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  th {
    text-align: left;
    padding: 16px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.text};
    border-bottom: 1px solid #e2e8f0;
  }

  td {
    padding: 16px;
    font-size: 14px;
    color: ${colors.text};
    border-bottom: 1px solid #e2e8f0;

    .book-info {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${colors.primary};
      }
    }
  }

  tbody {
    tr {
      transition: background-color 0.2s;

      &:hover {
        background-color: #f8fafc;
      }
    }
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  gap: 16px;
  color: #94a3b8;

  svg {
    opacity: 0.5;
  }

  p {
    font-size: 14px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 6px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
