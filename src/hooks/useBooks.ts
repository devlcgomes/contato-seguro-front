import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addBook = (bookData: Omit<Book, "id" | "status">) => {
    const newBook: Book = {
      id: String(Math.random()),
      ...bookData,
      status: "unread",
    };
    setBooks([...books, newBook]);
    setIsModalOpen(false);
  };

  const toggleBookStatus = (bookId: string) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? {
              ...book,
              status: book.status === "read" ? "unread" : "read",
            }
          : book
      )
    );
  };

  const deleteBook = (bookId: string) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return {
    books,
    isModalOpen,
    setIsModalOpen,
    addBook,
    toggleBookStatus,
    deleteBook,
  };
}
