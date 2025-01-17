import { Routes, Route } from "react-router-dom";
import { BooksScreen } from "../pages/Books/BooksScreen";
import DashboardScreen from "../pages/Dashboard/DashboardScreen";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
      <Route path="/books" element={<BooksScreen />} />
    </Routes>
  );
}
