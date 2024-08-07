import { Children } from "react";
import App from "./App";
import RootLayout from "./components/RootLayout/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
// import Profile from "./components/Profile";
// import DefaultProfile from "./components/DefaultProfile";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <App /> },
    ]
  },
];

export default routes;