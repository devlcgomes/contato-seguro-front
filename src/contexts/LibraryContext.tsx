import { createContext, useContext, useCallback, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Book {
  id: string;
  title: string;
  author: string;
  authorId: number;
  genre: string;
  pages: number;
  status: "read" | "unread";
  addedDate: string;
}

interface Author {
  id: number;
  name: string;
  email: string;
  addedDate: string;
}

interface AddBookData {
  title: string;
  authorId: string;
  authorName: string;
  genre: string;
  pages: number;
}

interface LibraryContextData {
  books: Book[];
  authors: Author[];
  addBook: (data: AddBookData) => void;
  addAuthor: (data: { name: string; email: string }) => void;
  deleteBook: (id: string) => void;
  deleteAuthor: (id: number) => void;
  toggleBookStatus: (id: string) => void;
  updateBooks: (books: Book[]) => void;
}

export const LibraryContext = createContext<LibraryContextData>(
  {} as LibraryContextData
);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useLocalStorage<Book[]>("books", []);
  const [authors, setAuthors] = useLocalStorage<Author[]>("authors", []);

  const addBook = useCallback(
    (bookData: AddBookData) => {
      const authorId = Number(bookData.authorId);
      if (isNaN(authorId)) {
        console.error("Invalid author ID:", bookData.authorId);
        return;
      }

      const newBook: Book = {
        id: String(new Date().getTime()),
        title: bookData.title,
        author: bookData.authorName,
        authorId,
        genre: bookData.genre,
        pages: bookData.pages,
        status: "unread" as const,
        addedDate: new Date().toISOString(),
      };

      setBooks((prevBooks) => {
        const updatedBooks = [...prevBooks, newBook];
        return updatedBooks;
      });
    },
    [setBooks]
  );

  const addAuthor = useCallback(
    (authorData: { name: string; email: string }) => {
      const newAuthor: Author = {
        ...authorData,
        id: Date.now(),
        addedDate: new Date().toISOString(),
      };
      setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
    },
    [setAuthors]
  );

  const deleteBook = useCallback(
    (id: string) => {
      setBooks((prevBooks) => {
        const updatedBooks = prevBooks.filter((book) => book.id !== id);
        return updatedBooks;
      });
    },
    [setBooks]
  );

  const deleteAuthor = useCallback(
    (id: number) => {
      setAuthors((prevAuthors) =>
        prevAuthors.filter((author) => author.id !== id)
      );
    },
    [setAuthors]
  );

  const toggleBookStatus = useCallback(
    (id: string) => {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id
            ? { ...book, status: book.status === "read" ? "unread" : "read" }
            : book
        )
      );
    },
    [setBooks]
  );

  const updateBooks = useCallback(
    (newBooks: Book[]) => {
      setBooks(newBooks);
    },
    [setBooks]
  );

  return (
    <LibraryContext.Provider
      value={{
        books,
        authors,
        addBook,
        addAuthor,
        deleteBook,
        deleteAuthor,
        toggleBookStatus,
        updateBooks,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary must be used within a LibraryProvider");
  }

  return context;
}
