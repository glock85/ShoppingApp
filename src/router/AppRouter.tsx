import { Routes, Route } from "react-router-dom";
import { ProductsHomePage, NotFoundPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsHomePage />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
