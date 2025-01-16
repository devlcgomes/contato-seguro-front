export interface Author {
  id: string;
  name: string;
  nationality: string;
  birthDate: string;
  books?: {
    id: string;
    title: string;
  }[];
}
