// import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAccessToken } from "../../redux/auth/selectors";
// import RecommendedPage from "../../pages/RecommendedPage/RecommendedPage";
// import LoginPage from "../../pages/LoginPage/LoginPage";

export const Layout: React.FC = () => {
  const accessToken = useSelector(selectAccessToken);

  const isAuthenticated: boolean = Boolean(accessToken);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;

  /* <Suspense>
    <Outlet/>
      </Suspense> */
};
// Перевіряти чи юзер авторизований.Чи в стейті записаний токен.Написати токен селектор і викликати.
// Якщо юзер зареестрований перенаправити на сторінку рекомендед якщо ні то на сторінку логіну
