import { useState } from "react";
import { useLibrary } from "../contexts/LibraryContext";

interface AddBookData {
  title: string;
  authorId: string;
  authorName: string;
  genre: string;
  pages: number;
}

export function useBooks() {
  const {
    books,
    addBook: addBookToLibrary,
    deleteBook: deleteBookFromLibrary,
    toggleBookStatus,
  } = useLibrary();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBook = (bookData: AddBookData) => {
    addBookToLibrary(bookData);
    setIsModalOpen(false);
  };

  const handleDeleteBook = (bookId: string) => {
    try {
      deleteBookFromLibrary(bookId);
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower) ||
      book.genre.toLowerCase().includes(searchLower)
    );
  });

  return {
    books,
    searchTerm,
    filteredBooks,
    isModalOpen,
    handleSearch,
    handleOpenModal,
    handleCloseModal,
    addBook: handleAddBook,
    deleteBook: handleDeleteBook,
    toggleBookStatus,
  };
}
