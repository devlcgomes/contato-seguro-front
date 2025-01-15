import styled from "styled-components";
import { colors } from "../../theme/colors";

export const SidebarContainer = styled.aside`
  width: 250px;
  background: white;
  padding: 24px;
  border-right: 1px solid #e0e0e0;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 40px;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? colors.primary + "20" : "transparent"};
  color: ${(props) => (props.active ? colors.primary : "inherit")};

  &:hover {
    background: ${colors.primary + "10"};
  }
`;
