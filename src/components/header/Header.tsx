import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";

import { AppRoutes } from "../../common/routes/AppRoutes";
import MainPage from "../../pages/main/MainPage.jsx";
import LoginPage from "../../pages/login/LoginPage.jsx";
import SignUpPage from "../../pages/signup/SignUpPage.tsx";
import s from "./Header.module.css";
import NotFoundPage from "../../pages/404/NotFoundPage.jsx";
import AdminCV from "../../pages/CV/adminCv/AdminCV";
import CV from "../../pages/CV/CV";
// import PrivateRoute from "../../common/hoc/PrivateRoute";

const HomeIconnn = ({ size }) => <HomeIcon style={{ fontSize: size, marginRight: 10 }} />;

const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

const Header = () => {
  return (
    <>
      <Navbar className={s.mainContainer}>
        <Nav>
          <Nav.Item as={NavLink} href={AppRoutes.MAIN_PAGE} icon={<HomeIconnn size="2em"/>}>
            Home
          </Nav.Item>
        </Nav>

        <Nav pullRight>
          <Nav.Item as={NavLink} href={AppRoutes.SIGN_UP}>
            Sign Up
          </Nav.Item>
        </Nav>

        <Nav pullRight>
          <Nav.Item as={NavLink} href={AppRoutes.LOGIN}>
            Login
          </Nav.Item>
        </Nav>
      </Navbar>

      {/* <Routes>
        <Route path={AppRoutes.MAIN_PAGE} element={<MainPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={AppRoutes.ADMIN} element={<AdminCV />} />
        <Route path={AppRoutes.CV} element={<CV />} />

      </Routes> */}
    </>
  );
};

export default Header;
