import React, { useEffect } from "react";
import Footer from "../components/common/footer";
import ScrollToTopButton from "../components/common/scroll-to-top-button";
import { Outlet, useLocation } from "react-router-dom";
import './user-layout.scss';
import NavBar from "../components/common/navbar";

const UserLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="user-layout-container">
        <NavBar />
        <div className="user-layout-spacer">
          <Outlet />
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default UserLayout;
