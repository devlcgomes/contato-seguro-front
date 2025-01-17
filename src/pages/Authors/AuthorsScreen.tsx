import { useState, useEffect } from "react";
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

// Interface para o tipo Author
interface Author {
  id: number;
  name: string;
  email: string;
  booksCount: number;
}

export default function AuthorsScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);

  // Carrega os autores do localStorage quando o componente é montado
  useEffect(() => {
    const storedAuthors = localStorage.getItem("authors");
    if (storedAuthors) {
      setAuthors(JSON.parse(storedAuthors));
    }
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddAuthor = () => {
    // Implementar lógica para adicionar autor
    console.log("Adicionar autor");
  };

  const handleEditAuthor = (id: number) => {
    console.log("Editar autor", id);
  };

  const handleDeleteAuthor = (id: number) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    setAuthors(updatedAuthors);
    localStorage.setItem("authors", JSON.stringify(updatedAuthors));
  };

  // Filtra os autores com base no termo de busca
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <AddButton onClick={handleAddAuthor}>
          <Plus size={20} />
          Adicionar Autor
        </AddButton>
      </Header>

      {authors.length === 0 ? (
        <EmptyState>
          <EmptyStateTitle>Nenhum autor cadastrado</EmptyStateTitle>
          <EmptyStateDescription>
            Você ainda não possui nenhum autor cadastrado no sistema.
          </EmptyStateDescription>
          <EmptyStateButton onClick={handleAddAuthor}>
            <Plus size={20} />
            Cadastrar Primeiro Autor
          </EmptyStateButton>
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
    </Container>
  );
}
