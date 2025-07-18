// src/routes/AppRoutes.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/Layout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{ path: 'dashboard', element: <Dashboard /> }],
    },
    { path: '/login', element: <Login /> },
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}
