import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { AppRoutes, RedirectRoutes } from '../../common/routes/AppRoutes';
import MainPage from "../../pages/main/MainPage.jsx";
import LoginPage from "../../pages/login/LoginPage.tsx";
import SignUpPage from "../../pages/signup/SignUpPage.tsx";
import s from "./Header.module.css"
// // import AdminCV from "../../pages/CV/adminCv/AdminCV";
// // import CV from "../../pages/CV/CV";

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
    <Nav.Item as={NavLink} href={AppRoutes.MAIN_PAGE} icon={<HomeIcon />}>
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
  <Route path={RedirectRoutes.MAIN_PAGE} element={<MainPage />} />
  <Route path={RedirectRoutes.LOGIN} element={<LoginPage />} />
  <Route path={RedirectRoutes.SIGN_UP} element={<SignUpPage />} />

</Routes>

    </>
  );
}

export default Header;
