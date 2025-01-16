import styled from "styled-components";
import { colors } from "../../theme/colors";

export const ContentArea = styled.div`
  padding: 20px;
`;

export const TopSection = styled.div`
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

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 8px 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #e0e0e0;

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

    &::placeholder {
      color: #999;
    }
  }

  svg {
    color: #999;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TableSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;
