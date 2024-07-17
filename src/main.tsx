import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './i18n.tsx'

import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthProvider } from "./context/AuthContext.tsx";
import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from 'react-router-dom'
import {
  LoginPage,
  ErrorPage,
  LoadingPage,
  DashboardPage
} from './pages'
import Root from './components/Root'
import ProtectedRoute from './router/ProtectedRoute'
import './App.scss'
import AddExpensePage from "./pages/AddExpensePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import EditProfilePage from "./pages/EditProfilePage.tsx";
import CryptoSearchPage from "./pages/CryptoSearchPage.tsx";
import CryptoDetailsPage from "./pages/CryptoDetailsPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (<ProtectedRoute><Root /></ProtectedRoute>),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: '/addExpense',
        element: <AddExpensePage />
      },
      {
        path: '/edit',
        element: <EditProfilePage />
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/crypto',
        element: <CryptoSearchPage />
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetailsPage />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  </StrictMode>,
)
