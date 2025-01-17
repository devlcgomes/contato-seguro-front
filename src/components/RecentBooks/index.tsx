import { useBooks } from "../../hooks/useBooks";
import * as S from "./styles";
import { Trash, Eye } from "@phosphor-icons/react";
import { Button } from "@radix-ui/themes";
import { Table } from "@radix-ui/themes";
import { Book } from "../../types/book";

interface RecentBooksProps {
  showAll?: boolean;
}

export function RecentBooks({ showAll = false }: RecentBooksProps) {
  const { books } = useBooks();
  const displayBooks = showAll ? books : books.slice(0, 5);

  const handleDeleteBook = (_id: string) => {
    // Implementar lógica de deleção
  };

  const openBookDetails = (_book: Book) => {
    // Implementar lógica de visualização
  };

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Título</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Autor</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Gênero</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Ações</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {displayBooks.map((book) => (
          <Table.Row key={book.id}>
            <Table.Cell>{book.title}</Table.Cell>
            <Table.Cell>{book.author}</Table.Cell>
            <Table.Cell>{book.genre}</Table.Cell>
            <Table.Cell>
              <S.ActionButtons>
                <Button
                  size="1"
                  variant="soft"
                  color="gray"
                  onClick={() => openBookDetails(book)}
                >
                  <Eye size={16} />
                </Button>
                <Button
                  size="1"
                  variant="soft"
                  color="red"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  <Trash size={16} />
                </Button>
              </S.ActionButtons>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
