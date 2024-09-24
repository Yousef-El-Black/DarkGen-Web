import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import AboutUs from "./pages/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Copyright from "./pages/Copyright/Copyright";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/copyright", element: <Copyright /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  const { dark } = useSelector(
    (state: { theme: { dark: boolean } }) => state.theme
  );

  return (
    <div className={`App ${dark ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
