import { Text } from "@radix-ui/themes";
import * as S from "./styles";
import logoBook from "../../assets/logoBook.png";
import { House, Books, Users, FolderOpen, Gear } from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.SidebarContainer>
      <S.Logo src={logoBook} alt="Logo" />
      <S.NavMenu>
        <S.MenuItem
          active={location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        >
          <House size={20} />
          <Text>Dashboard</Text>
        </S.MenuItem>
        <S.MenuItem
          active={location.pathname === "/books"}
          onClick={() => navigate("/books")}
        >
          <Books size={20} />
          <Text>Livros</Text>
        </S.MenuItem>
        <S.MenuItem
          active={location.pathname === "/authors"}
          onClick={() => navigate("/authors")}
        >
          <Users size={20} />
          <Text>Autores</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Gear size={20} />
          <Text>Settings</Text>
        </S.MenuItem>
      </S.NavMenu>
    </S.SidebarContainer>
  );
}
