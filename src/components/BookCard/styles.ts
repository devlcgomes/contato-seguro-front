import styled from "styled-components";
import { colors } from "../../theme/colors";

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const GenreTag = styled.span`
  background: ${colors.primary}20;
  color: ${colors.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
  margin-top: 8px;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #eee;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${colors.primary}10;
  }
`;
