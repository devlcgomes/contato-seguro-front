import { useMemo } from "react";
import { useLibrary } from "../contexts/LibraryContext";

export function useStatistics() {
  const { books, authors } = useLibrary();

  const booksByGenre = useMemo(() => {
    const genreCounts: { [key: string]: number } = {};

    books.forEach((book) => {
      if (book.genre) {
        genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
      }
    });

    return Object.entries(genreCounts).map(([genre, count]) => ({
      name: genre,
      value: count,
    }));
  }, [books]);

  const booksByAuthor = useMemo(() => {
    const authorCounts: { [key: number]: number } = {};

    books.forEach((book) => {
      if (book.authorId) {
        const authorIdNum =
          typeof book.authorId === "string"
            ? Number(book.authorId)
            : book.authorId;
        authorCounts[authorIdNum] = (authorCounts[authorIdNum] || 0) + 1;
      }
    });

    return Object.entries(authorCounts).map(([authorId, count]) => {
      const author = authors.find((a) => a.id === Number(authorId));
      return {
        name: author?.name || "Desconhecido",
        value: count,
      };
    });
  }, [books, authors]);

  const totalBooks = useMemo(() => books.length, [books]);
  const totalAuthors = useMemo(() => authors.length, [authors]);

  const monthlyBooks = useMemo(() => {
    const monthlyData = books.reduce((acc: { [key: string]: number }, book) => {
      const month = new Date(book.addedDate).toLocaleString("default", {
        month: "short",
      });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(monthlyData).map(([month, value]) => ({
      month,
      value,
    }));
  }, [books]);

  const recentBooks = useMemo(() => {
    return [...books]
      .sort(
        (a, b) =>
          new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
      )
      .slice(0, 5)
      .map((book) => {
        const author = authors.find((a) => a.id === book.authorId);
        return {
          ...book,
          authorName: author?.name || book.author,
        };
      });
  }, [books, authors]);

  const recentAuthors = useMemo(() => {
    return [...authors]
      .sort((a, b) => {
        const dateA = new Date(a.addedDate).getTime();
        const dateB = new Date(b.addedDate).getTime();
        return dateB - dateA;
      })
      .slice(0, 5)
      .map((author) => ({
        ...author,
        booksCount: books.filter((book) => {
          const authorIdNum =
            typeof book.authorId === "string"
              ? Number(book.authorId)
              : book.authorId;
          return authorIdNum === author.id;
        }).length,
      }));
  }, [books, authors]);

  return {
    booksByGenre,
    booksByAuthor,
    totalBooks,
    totalAuthors,
    monthlyBooks,
    recentBooks,
    recentAuthors,
  };
}
