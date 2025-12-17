import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/Layout/Layout.tsx";
import { lazy } from "react";
import { AuthProvider } from "./context/authContext.tsx";
import Header from "./components/Header/Header.tsx";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.tsx"));
const RecommendedPage = lazy(
  () => import("./pages/RecommendedPage/RecommendedPage.tsx")
);
const LibraryPage = lazy(() => import("./pages/LibraryPage/LibraryPage.tsx"));
const ReadingPage = lazy(() => import("./pages/ReadingPage/ReadingPage.tsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegistePage.tsx"));
function App() {
  return (
    <>
      <AuthProvider>
        <Header />
      </AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
