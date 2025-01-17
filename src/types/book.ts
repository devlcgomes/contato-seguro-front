interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: number;
  isRead?: boolean;
}

export type { Book };
