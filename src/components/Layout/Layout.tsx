import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <p>Layout</p>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
// Перевіряти чи юзер авторизований.Чи в стейті записаний токен.Написати токен селектор і викликати.Якщо юзер зареестрований перенаправити на сторінку рекомендед якщо ні то на сторінку логіну
