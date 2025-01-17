import { useState, useEffect } from "react";
import { useBooks } from "./useBooks";

interface RecentBook {
  id: number;
  title: string;
  authorName: string;
  genre: string;
  pages: number;
}

export function useRecentBooks() {
  const { books } = useBooks();
  const [recentBooks, setRecentBooks] = useState<RecentBook[]>([]);

  useEffect(() => {
    // Atualiza os livros recentes sempre que books mudar
    const sortedBooks = [...books].reverse().slice(0, 5);
    setRecentBooks(sortedBooks);
  }, [books]); // Dependência no array faz o efeito rodar quando books mudar

  return {
    recentBooks,
  };
}
