import { createElement } from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import HomePage from "../pages/HomePage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(MainLayout),
    children: [
      {
        path: "/",
        element: createElement(HomePage),
      },
    ],
  },
])
