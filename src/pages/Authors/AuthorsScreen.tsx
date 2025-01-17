import {
  MagnifyingGlass,
  Plus,
  PencilSimple,
  Trash,
} from "@phosphor-icons/react";
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  AddButton,
  TableContainer,
  Table,
  Th,
  Td,
  ActionButton,
  ActionsContainer,
  EmptyState,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateButton,
} from "./authors.styles";
import { useAuthors } from "./hooks/useAuthors";
import { Button } from "@radix-ui/themes";
import { AddAuthorModal } from "../../components/AddAuthorModal";

export default function AuthorsScreen() {
  const {
    authors,
    searchTerm,
    filteredAuthors,
    isModalOpen,
    setIsModalOpen,
    handleSearch,
    handleAddAuthor,
    addAuthor,
    handleEditAuthor,
    handleDeleteAuthor,
  } = useAuthors();

  return (
    <Container>
      <Header>
        <SearchContainer>
          <MagnifyingGlass size={20} color="#666" />
          <SearchInput
            type="text"
            placeholder="Buscar autores..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchContainer>
        <Button size="3" color="orange" onClick={handleAddAuthor}>
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
          <Button size="3" color="orange" onClick={handleAddAuthor}>
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
              {filteredAuthors.map((author) => (
                <tr key={author.id}>
                  <Td>{author.name}</Td>
                  <Td>{author.email}</Td>
                  <Td>{author.booksCount}</Td>
                  <Td>
                    <ActionsContainer>
                      <ActionButton onClick={() => handleEditAuthor(author.id)}>
                        <PencilSimple size={20} />
                      </ActionButton>
                      <ActionButton
                        onClick={() => handleDeleteAuthor(author.id)}
                      >
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddAuthor={addAuthor}
      />
    </Container>
  );
}
