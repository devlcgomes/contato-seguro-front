import { Button, Text, Tooltip } from "@radix-ui/themes";
import { MagnifyingGlass, Plus, Trash, Eye } from "@phosphor-icons/react";
import * as S from "./booksScreen.styles";
import { useBooks } from "./hooks/useBooks";
import { AddBookModal } from "../../components/AddBookModal";
import { memo, useState } from "react";
import { useAuthors } from "../../hooks/useAuthors";
import { ViewBookModal } from "../../components/ViewBookModal";
import { Book } from "../../types/book";

const BooksScreen = memo(function BooksScreen() {
  const {
    books,
    searchTerm,
    filteredBooks,
    isModalOpen,
    handleSearch,
    handleAddBook,
    addBook,
    handleDeleteBook,
    handleCloseModal,
  } = useBooks();

  const { authors } = useAuthors();

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleViewBook = (bookId: string) => {
    const book = filteredBooks.find((b) => b.id === bookId);
    if (book) {
      setSelectedBook(book);
      setIsViewModalOpen(true);
    }
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedBook(null);
  };

  const confirmDelete = (bookId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este livro?")) {
      handleDeleteBook(bookId);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <Text size="6" weight="bold">
          Biblioteca
        </Text>
        <Tooltip
          content={
            authors.length === 0
              ? "Você precisa cadastrar pelo menos um autor antes de adicionar um livro"
              : ""
          }
        >
          <Button
            size="3"
            color="orange"
            onClick={handleAddBook}
            disabled={authors.length === 0}
          >
            <Plus size={20} />
            Adicionar novo livro
          </Button>
        </Tooltip>
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
          <Tooltip
            content={
              authors.length === 0
                ? "Você precisa cadastrar pelo menos um autor antes de adicionar um livro"
                : ""
            }
          >
            <Button
              size="3"
              color="orange"
              onClick={handleAddBook}
              disabled={authors.length === 0}
            >
              <Plus size={20} />
              Cadastrar Primeiro Livro
            </Button>
          </Tooltip>
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
                      <S.ActionButton
                        title="Visualizar"
                        onClick={() => handleViewBook(book.id)}
                      >
                        <Eye size={20} />
                      </S.ActionButton>
                      <S.ActionButton
                        title="Excluir"
                        onClick={() => confirmDelete(book.id)}
                      >
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
        onClose={handleCloseModal}
        onAddBook={addBook}
      />

      <ViewBookModal
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        book={selectedBook}
      />
    </S.Container>
  );
});

export { BooksScreen };
