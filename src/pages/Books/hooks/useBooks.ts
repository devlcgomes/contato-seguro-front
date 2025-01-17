import { useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: number;
  status: "read" | "unread";
}

export function useBooks() {
  const [books, setBooks] = useLocalStorage<Book[]>("books", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddBook = () => {
    setIsModalOpen(true);
  };

  const addBook = (bookData: Omit<Book, "id" | "status">) => {
    const newBook: Book = {
      id: String(Math.random()),
      ...bookData,
      status: "unread",
    };
    setBooks([...books, newBook]);
  };

  const handleEditBook = (id: string) => {
    // Implementar edição
  };

  const handleDeleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return {
    books,
    searchTerm,
    filteredBooks,
    isModalOpen,
    setIsModalOpen,
    handleSearch,
    handleAddBook,
    addBook,
    handleEditBook,
    handleDeleteBook,
  };
}
