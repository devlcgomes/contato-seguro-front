import { useState } from "react";
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

  const addBook = (bookData: AddBookData) => {
    const newBook: Book = {
      id: crypto.randomUUID(),
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
    handleDeleteBook,
  };
}
