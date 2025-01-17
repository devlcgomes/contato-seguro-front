import { useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

interface Author {
  id: string;
  name: string;
  email: string;
  booksCount: number;
}

export function useAuthors() {
  const [authors, setAuthors] = useLocalStorage<Author[]>("authors", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddAuthor = () => {
    setIsModalOpen(true);
  };

  const addAuthor = (authorData: { name: string; email: string }) => {
    const newAuthor: Author = {
      id: crypto.randomUUID(),
      name: authorData.name,
      email: authorData.email,
      booksCount: 0,
    };
    setAuthors([...authors, newAuthor]);
  };

  const handleEditAuthor = (id: string) => {
    // Implementar edição
  };

  const handleDeleteAuthor = (id: string) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return {
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
  };
}
