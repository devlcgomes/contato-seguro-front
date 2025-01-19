import { useState } from "react";
import { useLibrary } from "../contexts/LibraryContext";

interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  genre: string;
  pages: number;
  status: "read" | "unread";
  addedDate: string;
}

interface AddBookData {
  title: string;
  authorId: string;
  authorName: string;
  genre: string;
  pages: number;
}

export function useBooks() {
  const { books, addBook: addBookToLibrary, deleteBook, toggleBookStatus } = useLibrary();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBook = (bookData: AddBookData) => {
    addBookToLibrary(bookData);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return {
    books,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    addBook: handleAddBook,
    deleteBook,
    toggleBookStatus,
  };
}
