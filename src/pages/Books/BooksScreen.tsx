import { Button, Text } from "@radix-ui/themes";
import { MagnifyingGlass, Plus, Trash } from "@phosphor-icons/react";
import * as S from "./booksScreen.styles";
import { useBooks } from "./hooks/useBooks";
import { AddBookModal } from "../../components/AddBookModal";

function BooksScreen() {
  const {
    books,
    searchTerm,
    filteredBooks,
    isModalOpen,
    setIsModalOpen,
    handleSearch,
    handleAddBook,
    addBook,
    handleDeleteBook,
  } = useBooks();

  return (
    <S.Container>
      <S.Header>
        <Text size="6" weight="bold">
          Biblioteca
        </Text>
        <Button size="3" color="orange" onClick={handleAddBook}>
          <Plus size={20} />
          Adicionar novo livro
        </Button>
      </S.Header>

      <S.FilterSection>
        <S.SearchContainer>
          <MagnifyingGlass size={20} color="#666" />
          <S.SearchInput
            type="text"
            placeholder="Buscar por título, autor ou gênero..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </S.SearchContainer>
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

      {books.length === 0 ? (
        <S.EmptyState>
          <S.EmptyStateTitle>Nenhum livro cadastrado</S.EmptyStateTitle>
          <S.EmptyStateDescription>
            Você ainda não possui nenhum livro cadastrado no sistema.
          </S.EmptyStateDescription>
          <Button size="3" color="orange" onClick={handleAddBook}>
            <Plus size={20} />
            Cadastrar Primeiro Livro
          </Button>
        </S.EmptyState>
      ) : (
        <S.TableContainer>
          <S.Table>
            <thead>
              <tr>
                <S.Th>Título</S.Th>
                <S.Th>Autor</S.Th>
                <S.Th>Gênero</S.Th>
                <S.Th>Páginas</S.Th>
                <S.Th>Status</S.Th>
                <S.Th>Ações</S.Th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <S.Td>{book.title}</S.Td>
                  <S.Td>{book.author}</S.Td>
                  <S.Td>{book.genre}</S.Td>
                  <S.Td>{book.pages}</S.Td>
                  <S.Td>{book.status === "read" ? "Lido" : "Não lido"}</S.Td>
                  <S.Td>
                    <S.ActionsContainer>
                      <S.ActionButton onClick={() => handleDeleteBook(book.id)}>
                        <Trash size={20} />
                      </S.ActionButton>
                    </S.ActionsContainer>
                  </S.Td>
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableContainer>
      )}

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={addBook}
      />
    </S.Container>
  );
}

export { BooksScreen };
