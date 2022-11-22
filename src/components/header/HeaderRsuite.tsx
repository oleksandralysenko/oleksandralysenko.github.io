import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";

// import * as faAddressBook from '@fortawesome/free-regular-svg-icons/faAddressBook';
// import { Icon } from '@rsuite/icons';

import { AppRoutes, RedirectRoutes } from "../../common/routes/AppRoutes";
import MainPage from "../../pages/main/MainPage.jsx";
import LoginPage from "../../pages/login/LoginPage.tsx";
import SignUpPage2 from "../../pages/signup/SignUpPage2.tsx";
import s from "./Header.module.css";
import NotFoundPage from "../../pages/404/NotFoundPage.tsx";
import AdminCV from "../../pages/CV/adminCv/AdminCV.tsx";
// // import CV from "../../pages/CV/CV";

// const FaSvgIcon = ({ faIcon, ...rest }) => {
//   const { width, height, svgPathData } = faIcon;
//   return (
//     <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
//       <path d={svgPathData}></path>
//     </svg>
//   );
// };

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
        <Route path={RedirectRoutes.SIGN_UP} element={<SignUpPage2 />} />
        <Route path={RedirectRoutes.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={RedirectRoutes.ADMIN} element={<AdminCV />} />

      </Routes>
    </>
  );
};

export default Header;
