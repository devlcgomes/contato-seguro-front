import { useState, useCallback } from "react";
import { useLibrary } from "../contexts/LibraryContext";

export function useAuthors() {
  const { authors, addAuthor: addAuthorToLibrary } = useLibrary();
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  const handleAddAuthor = useCallback((authorData: { name: string; email: string }) => {
    addAuthorToLibrary(authorData);
    setIsAuthorModalOpen(false);
  }, [addAuthorToLibrary]);

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
    addAuthor: handleAddAuthor,
  };
}
