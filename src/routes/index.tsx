import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { BooksScreen } from "../pages/Books/BooksScreen";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/books" element={<BooksScreen />} />
    </Routes>
  );
}
