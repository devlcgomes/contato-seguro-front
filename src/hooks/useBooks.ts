import { useState, useEffect } from "react";

interface Book {
  id: number;
  title: string;
  authorId: number;
  authorName: string;
  genre: string;
  pages: number;
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);

  // Carrega os livros iniciais
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
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

  const handleDeleteBook = (bookId: number) => {
    setBookToDelete(bookId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (bookToDelete) {
      const updatedBooks = books.filter((book) => book.id !== bookToDelete);
      setBooks(updatedBooks); // Atualiza o estado
      localStorage.setItem("books", JSON.stringify(updatedBooks)); // Atualiza o localStorage
      setIsDeleteModalOpen(false);
      setBookToDelete(null);
    }
  };

  const openBookDetails = (book: Book) => {
    setSelectedBook(book);
    setIsDetailsModalOpen(true);
  };

  return {
    books,
    selectedBook,
    isModalOpen,
    isDetailsModalOpen,
    isDeleteModalOpen,
    setIsModalOpen,
    setIsDetailsModalOpen,
    setIsDeleteModalOpen,
    addBook,
    handleDeleteBook,
    confirmDelete,
    openBookDetails,
  };
}
