import { useState, useEffect, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface Author {
  id: number;
  name: string;
  email: string;
}

export function useAuthors() {
  const [authors, setAuthors] = useLocalStorage<Author[]>("authors", []);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  const addAuthor = useCallback((newAuthor: { name: string; email: string }) => {
    const author = {
      ...newAuthor,
      id: Date.now(), // Usando timestamp para garantir IDs únicos
    };

    setAuthors((prevAuthors) => [...prevAuthors, author]);
  }, [setAuthors]);

  const handleOpenModal = useCallback(() => {
    setIsAuthorModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsAuthorModalOpen(false);
  }, []);

  return {
    authors,
    isAuthorModalOpen,
    handleOpenModal,
    handleCloseModal,
    addAuthor,
  };
}
