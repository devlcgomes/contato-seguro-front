import { useState, useEffect } from "react";
import { Author } from "../../../types/author";

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    authors,
    searchTerm,
    filteredAuthors,
    handleSearch,
    handleAddAuthor,
    handleEditAuthor,
    handleDeleteAuthor,
  };
}
