import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ShopPage from "./components/ShopPage/ShopPage";
import ShopIntro from "./components/ShopIntro/ShopIntro";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <ShopIntro/> },
        { path: "shop", element: <ShopPage /> },
    ]
  },
];

export default routes;