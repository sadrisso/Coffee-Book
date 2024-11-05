import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import CategoryCard from "../components/CategoryCard";
import CoffeeDetails from "../pages/CoffeeDetails";
import Coffees from "../pages/Coffees";


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
        {
          path: '/coffee/:id',
          loader: () => fetch("../coffees.json"),
          element: <CoffeeDetails />
        },
        {
          path: '/coffees',
          loader: () => fetch("../coffees.json"),
          element: <Coffees/>
        }

      ]
    }
  ])

  export default routes;