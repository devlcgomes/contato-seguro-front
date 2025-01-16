import { useRecentBooks } from "../../hooks/useRecentBooks";
import { useBooks } from "../../hooks/useBooks";
import * as S from "./styles";
import { Book, Trash, Eye } from "@phosphor-icons/react";
import { BookDetailsModal } from "../BookDetailsModal";
import { Button } from "@radix-ui/themes";
import { DeleteConfirmationDialog } from "../DeleteConfirmationDialog";

export function RecentBooks() {
  const { recentBooks } = useRecentBooks();
  const {
    handleDeleteBook,
    confirmDelete,
    openBookDetails,
    selectedBook,
    isDetailsModalOpen,
    setIsDetailsModalOpen,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  } = useBooks();

  return (
    <>
      <S.Container>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Gênero</th>
              <th>Páginas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recentBooks.length > 0 ? (
              recentBooks.map((book) => (
                <tr key={book.id}>
                  <td>
                    <div className="book-info">
                      <Book size={20} />
                      {book.title}
                    </div>
                  </td>
                  <td>{book.authorName}</td>
                  <td>{book.genre}</td>
                  <td>{book.pages}</td>
                  <td>
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
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <S.EmptyState>
                    <Book size={32} />
                    <p>Nenhum livro adicionado ainda</p>
                  </S.EmptyState>
                </td>
              </tr>
            )}
          </tbody>
        </S.Table>
      </S.Container>

      <BookDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        book={selectedBook}
      />

      <DeleteConfirmationDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirmar exclusão"
        description="Tem certeza que deseja excluir este livro? Esta ação não pode ser desfeita."
      />
    </>
  );
}
