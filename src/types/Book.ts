export interface Book {
  id: string;
  title: string;
  author: string;
  authorName?: string; // Usado na dashboard para exibir o nome do autor
  genre: string;
  pages: number;
  status: "read" | "unread";
  createdAt?: Date;
}
