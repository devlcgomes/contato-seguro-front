import { Text } from "@radix-ui/themes";
import * as S from "./styles";
import logoBook from "../../assets/logoBook.png";
import { House, Books, Users, FolderOpen, Gear } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.Logo src={logoBook} alt="Logo" />
      <S.NavMenu>
        <S.MenuItem active>
          <House size={20} />
          <Text>Dashboard</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Books size={20} />
          <Text>Books</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Users size={20} />
          <Text>Authors</Text>
        </S.MenuItem>
        <S.MenuItem>
          <FolderOpen size={20} />
          <Text>My Files</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Gear size={20} />
          <Text>Settings</Text>
        </S.MenuItem>
      </S.NavMenu>
    </S.SidebarContainer>
  );
}
