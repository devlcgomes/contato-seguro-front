import { MagnifyingGlass, Plus, Trash } from "@phosphor-icons/react";
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
import { memo } from "react";

const AuthorsScreen = memo(function AuthorsScreen() {
  const {
    authors,
    isAuthorModalOpen,
    handleOpenModal,
    handleCloseModal,
    addAuthor,
  } = useAuthors();

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
                  <Td>{0}</Td>
                  <Td>
                    <ActionsContainer>
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
    </Container>
  );
});

export { AuthorsScreen };
