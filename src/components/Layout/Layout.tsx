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
