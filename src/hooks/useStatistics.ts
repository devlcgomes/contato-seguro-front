import { useLocalStorage } from "./useLocalStorage";
import { Author, Book } from "../types";

export const useStatistics = () => {
  const [books] = useLocalStorage<Book[]>("books", []);
  const [authors] = useLocalStorage<Author[]>("authors", []);

  const getBooksByGenre = () => {
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
  };

  const getBooksByAuthor = () => {
    const authorCounts: { [key: string]: number } = {};

    books.forEach((book) => {
      if (book.authorId) {
        authorCounts[book.authorId] = (authorCounts[book.authorId] || 0) + 1;
      }
    });

    return Object.entries(authorCounts).map(([authorId, count]) => {
      const author = authors.find((a) => a.id === authorId);
      return {
        name: author?.name || "Desconhecido",
        value: count,
      };
    });
  };

  const getTotalBooks = () => books.length;
  const getTotalAuthors = () => authors.length;

  const getMonthlyBooks = () => {
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
  };

  const getRecentBooks = () => {
    return books
      .sort((a, b) => {
        const dateA = new Date(a.addedDate).getTime();
        const dateB = new Date(b.addedDate).getTime();
        return dateB - dateA;
      })
      .slice(0, 5)
      .map((book) => ({
        ...book,
        name: book.title,
        authorName:
          authors.find((author) => author.id === book.authorId)?.name ||
          "Desconhecido",
      }));
  };

  const getRecentAuthors = () => {
    return authors
      .sort((a, b) => {
        const dateA = new Date(a.addedDate).getTime();
        const dateB = new Date(b.addedDate).getTime();
        return dateB - dateA;
      })
      .slice(0, 5)
      .map((author) => ({
        ...author,
        booksCount: books.filter((book) => book.authorId === author.id).length,
      }));
  };

  return {
    booksByGenre: getBooksByGenre(),
    booksByAuthor: getBooksByAuthor(),
    totalBooks: getTotalBooks(),
    totalAuthors: getTotalAuthors(),
    monthlyBooks: getMonthlyBooks(),
    recentBooks: getRecentBooks(),
    recentAuthors: getRecentAuthors(),
  };
};
