import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/Login/LoginScreen";
import DashboardScreen from "./pages/Dashboard/DashboardScreen";
import { BooksScreen } from "./pages/Books/BooksScreen";
import { Layout } from "./components/Layout";
import { AuthorsScreen } from "./pages/Authors/AuthorsScreen";
import { LibraryProvider } from "./contexts/LibraryContext";

export default function App() {
  return (
    <Theme>
      <LibraryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <DashboardScreen />
                </Layout>
              }
            />
            <Route
              path="/books"
              element={
                <Layout>
                  <BooksScreen />
                </Layout>
              }
            />
            <Route
              path="/authors"
              element={
                <Layout>
                  <AuthorsScreen />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </LibraryProvider>
    </Theme>
  );
}
