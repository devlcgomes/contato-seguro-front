import { useState, useEffect } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  pages: number;
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      // Importa os livros mockados inicialmente
      import("../data/mockup").then(({ books: mockBooks }) => {
        setBooks(mockBooks);
        localStorage.setItem("books", JSON.stringify(mockBooks));
      });
    }
  }, []);

  const addBook = (newBook: Omit<Book, "id">) => {
    const book = {
      ...newBook,
      id: books.length + 1,
    };

    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return {
    books,
    isModalOpen,
    setIsModalOpen,
    addBook,
  };
}
