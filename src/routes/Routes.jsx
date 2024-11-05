import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CategoryCard from "../components/CategoryCard";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch("../categories.json"),
          children: [
            {
              path: '/',
              element: <CategoryCard />,
              loader: () => fetch("../coffees.json")
            },
            {
              path: '/category/:category',
              element: <CategoryCard />,
              loader: () => fetch("../coffees.json")
            }
          ]
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },

      ]
    }
  ])

  export default routes;