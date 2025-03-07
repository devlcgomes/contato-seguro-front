import { Text } from "@radix-ui/themes";
import * as S from "./styles";
import logoBook from "../../assets/logoBook.png";
import { House, Books, Users, Gear, SignOut } from "@phosphor-icons/react";
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
        <S.MenuItem
          active={location.pathname === "/profile"}
          onClick={() => navigate("/profile")}
        >
          <Gear size={20} />
          <Text>Meu Perfil</Text>
        </S.MenuItem>
        <S.MenuItem
          active={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          <SignOut size={20} />
          <Text>Sair</Text>
        </S.MenuItem>
      </S.NavMenu>
    </S.SidebarContainer>
  );
}
