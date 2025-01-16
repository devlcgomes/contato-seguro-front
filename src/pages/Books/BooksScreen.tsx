import { Button, Text } from "@radix-ui/themes";
import * as S from "./booksScreen.styles";
import { BookOpenUser, MagnifyingGlass } from "@phosphor-icons/react";
import { useBooks } from "../../hooks/useBooks";
import { AddBookModal } from "../../components/AddBookModal";
import { RecentBooks } from "../../components/RecentBooks";

export default function BooksScreen() {
  const { books, isModalOpen, setIsModalOpen, addBook } = useBooks();

  return (
    <S.ContentArea>
      <S.TopSection>
        <Text size="6" weight="bold">
          Biblioteca
        </Text>
        <Button color="orange" size="3" onClick={() => setIsModalOpen(true)}>
          Adicionar novo livro
          <BookOpenUser />
        </Button>
      </S.TopSection>

      <S.FilterSection>
        <S.SearchInput>
          <MagnifyingGlass size={20} />
          <input
            type="text"
            placeholder="Buscar por título, autor ou gênero..."
          />
        </S.SearchInput>
        <S.FilterButtons>
          <Button color="gray" variant="soft">
            Todos
          </Button>
          <Button color="gray" variant="soft">
            Lidos
          </Button>
          <Button color="gray" variant="soft">
            Não lidos
          </Button>
          <Button color="gray" variant="soft">
            Favoritos
          </Button>
        </S.FilterButtons>
      </S.FilterSection>

      <S.TableSection>
        <RecentBooks showAll />
      </S.TableSection>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={addBook}
      />
    </S.ContentArea>
  );
}

export { BooksScreen };
