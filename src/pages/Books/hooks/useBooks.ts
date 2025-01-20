import { useState, useCallback } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  genre: string;
  pages: number;
  status: "read" | "unread";
}

interface AddBookData {
  title: string;
  authorName: string;
  authorId: string;
  genre: string;
  pages: number;
}

export function useBooks() {
  const [books, setBooks] = useLocalStorage<Book[]>("books", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBooks = books.filter((book) => {
    if (!searchTerm) return true;
    
    const search = searchTerm.toLowerCase();
    return (
      (book.title || "").toLowerCase().includes(search) ||
      (book.author || "").toLowerCase().includes(search) ||
      (book.genre || "").toLowerCase().includes(search)
    );
  });

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value || "");
  }, []);

  const handleAddBook = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const addBook = useCallback((bookData: AddBookData) => {
    const newBook: Book = {
      id: crypto.randomUUID(),
      title: bookData.title,
      author: bookData.authorName,
      authorId: bookData.authorId,
      genre: bookData.genre,
      pages: bookData.pages,
      status: "unread",
    };
    
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }, [setBooks]);

  const handleDeleteBook = useCallback((id: string) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }, [setBooks]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    books,
    searchTerm,
    filteredBooks,
    isModalOpen,
    setIsModalOpen,
    handleSearch,
    handleAddBook,
    addBook,
    handleDeleteBook,
    handleCloseModal,
  };
}
