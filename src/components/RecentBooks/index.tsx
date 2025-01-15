import * as S from "./styles";

export function RecentBooks() {
  return (
    <S.TableContainer>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Added Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{/* Dados serão preenchidos dinamicamente */}</tbody>
      </table>
    </S.TableContainer>
  );
}
