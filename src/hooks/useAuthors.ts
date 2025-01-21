import { useState } from "react";
import { useLibrary } from "../contexts/LibraryContext";

export function useAuthors() {
  const {
    authors,
    addAuthor: addAuthorToLibrary,
    deleteAuthor: deleteAuthorFromLibrary,
  } = useLibrary();
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAuthorModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthorModalOpen(false);
  };

  const addAuthor = (authorData: { name: string; email: string }) => {
    addAuthorToLibrary(authorData);
    setIsAuthorModalOpen(false);
  };

  const deleteAuthor = (authorId: number) => {
    try {
      deleteAuthorFromLibrary(authorId);
    } catch (error) {
      console.error("Erro ao excluir autor:", error);
    }
  };

  return {
    authors,
    isAuthorModalOpen,
    handleOpenModal,
    handleCloseModal,
    addAuthor,
    deleteAuthor,
  };
}
