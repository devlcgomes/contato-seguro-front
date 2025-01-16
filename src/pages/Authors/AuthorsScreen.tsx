import { useState } from "react";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  AddButton,
} from "./authors.styles";

export default function AuthorsScreen() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddAuthor = () => {
    // Implementar lógica para adicionar autor
    console.log("Adicionar autor");
  };

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
    </Container>
  );
}
