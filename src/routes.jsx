import App from "./App";
import RootLayout from "./components/RootLayout/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ShopPage from "./components/ShopPage/ShopPage";
// import Profile from "./components/Profile";
// import DefaultProfile from "./components/DefaultProfile";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <App /> },
        { path: "shop", element: <ShopPage /> },
    ]
  },
];

export default routes;