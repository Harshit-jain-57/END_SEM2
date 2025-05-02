import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AdminPanel from './pages/AdminPanel/AdminPanel';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/:fabric/:subcategory', element: <CategoryPage /> },
  { path: '/product/:slug', element: <ProductPage /> },
  { path: '/admin/*', element: <AdminPanel /> }   // guarded
]);