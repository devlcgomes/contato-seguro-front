export interface Book {
  id: string;
  title: string; // nome do livro
  authorId: string;
  genre: string;
  pages: number;
  addedDate: string;
}

export interface Author {
  id: string;
  name: string;
  addedDate: string;
}

export interface StatisticsData {
  name: string;
  value: number;
}
