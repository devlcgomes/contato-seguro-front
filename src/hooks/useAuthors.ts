import { useState, useEffect } from "react";

interface Author {
  id: number;
  name: string;
  birthDate: string;
  nationality: string;
  biography: string;
}

export function useAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  useEffect(() => {
    const storedAuthors = localStorage.getItem("authors");
    if (storedAuthors) {
      setAuthors(JSON.parse(storedAuthors));
    }
  }, []);

  const addAuthor = (newAuthor: Omit<Author, "id">) => {
    const author = {
      ...newAuthor,
      id: authors.length + 1,
    };

    const updatedAuthors = [...authors, author];
    setAuthors(updatedAuthors);
    localStorage.setItem("authors", JSON.stringify(updatedAuthors));
  };

  return {
    authors,
    isAuthorModalOpen,
    setIsAuthorModalOpen,
    addAuthor,
  };
}
