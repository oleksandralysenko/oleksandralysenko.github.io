import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";

// import * as faAddressBook from '@fortawesome/free-regular-svg-icons/faAddressBook';
// import { Icon } from '@rsuite/icons';

import { AppRoutes, RedirectRoutes } from "../../common/routes/AppRoutes";
import MainPage from "../../pages/main/MainPage.jsx";
import LoginPage from "../../pages/login/LoginPage.tsx";
import SignUpPage2 from "../../pages/signup/SignUpPage.tsx";
import s from "./Header.module.css";
import NotFoundPage from "../../pages/404/NotFoundPage.tsx";
import AdminCV from "../../pages/CV/adminCv/AdminCV";
import CV from "../../pages/CV/CV";

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

      <Routes>
        <Route path={AppRoutes.MAIN_PAGE} element={<MainPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.SIGN_UP} element={<SignUpPage2 />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={AppRoutes.ADMIN} element={<AdminCV />} />
        <Route path={AppRoutes.CV} element={<CV />} />

      </Routes>
    </>
  );
};

export default Header;
