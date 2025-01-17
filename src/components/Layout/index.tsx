import { Sidebar } from "../Sidebar";
import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.LayoutContainer>
      <Sidebar />
      <S.MainContent>{children}</S.MainContent>
    </S.LayoutContainer>
  );
}
