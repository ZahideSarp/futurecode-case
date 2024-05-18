import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/home-pages";
import ContactPages from "../pages/contact-pages";
import BlogPages from "../pages/blog-pages";
import BlogDetailPages from "../pages/blog-detail-pages";
import UserLayout from "../layouts/user-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
      {
        path: "contact",
        element: <ContactPages />,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogPages />,
          },
          {
            path: ":id",
            element: <BlogDetailPages />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
