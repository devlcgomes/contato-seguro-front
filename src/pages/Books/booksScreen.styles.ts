import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #f97316;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TableContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  color: #666;
  font-weight: 600;
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  color: #333;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const EmptyStateTitle = styled.h2`
  color: #666;
  font-size: 20px;
  margin-bottom: 8px;
`;

export const EmptyStateDescription = styled.p`
  color: #888;
  font-size: 16px;
  margin-bottom: 24px;
`;
