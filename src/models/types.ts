export interface Author {
  id: string;
  name: string;
  email?: string;
}

export interface Book {
  id: string;
  name: string;
  author: Author;
  pages?: number;
  gender: string;
}
