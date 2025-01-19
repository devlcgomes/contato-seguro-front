import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

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
  authorId: string;
  authorName: string;
  genre: string;
  pages: number;
}

export function useBooks() {
  const [books, setBooks] = useLocalStorage<Book[]>("books", []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addBook = (bookData: AddBookData) => {
    const newBook: Book = {
      id: String(Math.random()),
      title: bookData.title,
      author: bookData.authorName,
      authorId: bookData.authorId,
      genre: bookData.genre,
      pages: bookData.pages,
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
