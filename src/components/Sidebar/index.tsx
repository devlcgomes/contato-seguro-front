import { Text } from "@radix-ui/themes";
import * as S from "./styles";
import logoBook from "../../assets/logoBook.png";

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.Logo src={logoBook} alt="Logo" />

      <S.NavMenu>
        <S.MenuItem active>
          <Text>My Files</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Text>Authors</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Text>Books</Text>
        </S.MenuItem>
        <S.MenuItem>
          <Text>Settings</Text>
        </S.MenuItem>
      </S.NavMenu>
    </S.SidebarContainer>
  );
}
