import { MagnifyingGlass, Plus, Trash, Eye } from "@phosphor-icons/react";
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  TableContainer,
  Table,
  Th,
  Td,
  ActionButton,
  ActionsContainer,
  EmptyState,
  EmptyStateTitle,
  EmptyStateDescription,
} from "./authors.styles";
import { useAuthors } from "../../hooks/useAuthors";
import { Button } from "@radix-ui/themes";
import { AddAuthorModal } from "../../components/AddAuthorModal";
import { ViewAuthorModal } from "../../components/ViewAuthorModal";
import { memo, useState } from "react";
import { useLibrary } from "../../contexts/LibraryContext";
import { Author } from "../../types/author";

const AuthorsScreen = memo(function AuthorsScreen() {
  const { books } = useLibrary();
  const {
    authors,
    isAuthorModalOpen,
    handleOpenModal,
    handleCloseModal,
    addAuthor,
  } = useAuthors();

  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleViewAuthor = (author: Author) => {
    setSelectedAuthor(author);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedAuthor(null);
  };

  const getAuthorBooksCount = (authorId: number) => {
    return books.filter((book) => book.authorId === authorId).length;
  };

  return (
    <Container>
      <Header>
        <Button size="3" color="orange" onClick={handleOpenModal}>
          <Plus size={20} />
          Adicionar Autor
        </Button>
      </Header>

      {authors.length === 0 ? (
        <EmptyState>
          <EmptyStateTitle>Nenhum autor cadastrado</EmptyStateTitle>
          <EmptyStateDescription>
            Você ainda não possui nenhum autor cadastrado no sistema.
          </EmptyStateDescription>
          <Button size="3" color="orange" onClick={handleOpenModal}>
            <Plus size={20} />
            Cadastrar Primeiro Autor
          </Button>
        </EmptyState>
      ) : (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>Quantidade de Livros</Th>
                <Th>Ações</Th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.id}>
                  <Td>{author.name}</Td>
                  <Td>{author.email}</Td>
                  <Td>{getAuthorBooksCount(author.id)}</Td>
                  <Td>
                    <ActionsContainer>
                      <ActionButton
                        title="Visualizar"
                        onClick={() => handleViewAuthor(author)}
                      >
                        <Eye size={20} />
                      </ActionButton>
                      <ActionButton>
                        <Trash size={20} />
                      </ActionButton>
                    </ActionsContainer>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}

      <AddAuthorModal
        isOpen={isAuthorModalOpen}
        onClose={handleCloseModal}
        onAddAuthor={addAuthor}
      />

      <ViewAuthorModal
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        author={selectedAuthor}
      />
    </Container>
  );
});

export { AuthorsScreen };
