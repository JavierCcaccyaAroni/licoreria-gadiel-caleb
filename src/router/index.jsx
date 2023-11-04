import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddProductsPage,
  HomePage,
  ProductsPage,
  SignInPage,
  SignUpPage
} from "../pages";
import { AuthLayout, Layout, MainLayout } from "../components/Layouts";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route element={<MainLayout />}>
            <Route path="/addproducts" element={<AddProductsPage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}