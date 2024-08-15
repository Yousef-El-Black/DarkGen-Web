import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
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
