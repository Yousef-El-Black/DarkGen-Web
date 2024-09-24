import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const Layout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Preloader isLoading={isLoading} />
    </>
  );
};

export default Layout;
