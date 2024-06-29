import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layouts/Root";
import DashboardLayout from "../layouts/Dashboard";
import ProductsPage from "../pages/Products";
import PrivateRoute from "../components/auth/PrivateRoute";
import UsersPage from "../pages/Users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      // * Root Layout
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path="dashboard" element={<h1>Dashboard page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route
          path="login"
          element={
            <PrivateRoute isAllowed={false} redirectPath="/">
              <h1>Login page</h1>
            </PrivateRoute>
          }
        />
      </Route>
      // * Dashboard Layout
      <Route
        path="/dashboard"
        element={
          <PrivateRoute isAllowed redirectPath="/login">
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<h1>Admin Dashboard Page</h1>} />
        <Route path="products" element={<ProductsPage />} errorElement={<h1>Something went wrong</h1>} />
        <Route path="users" element={<UsersPage />} />
      </Route>
      <Route path="*" element={<h2>Page not found!</h2>} />
    </>
  )
);

export default router;
