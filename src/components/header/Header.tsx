// import s from "./Header.module.css";
// import { Link, Route, Routes } from "react-router-dom";
// import { RedirectRoutes, AppRoutes } from "../../common/routes/AppRoutes";
// import MainPage from "../../pages/main/MainPage";
// import LoginPage from "../../pages/login/LoginPage.tsx";
// import SignUpPage from "../../pages/signup/SignUpPage.tsx";
// import AdminCV from "../../pages/CV/adminCv/AdminCV.tsx";
// import CV from "../../pages/CV/CV.jsx";
// import { EnterTypes } from "../../common/Types.tsx";
// import { useEffect } from "react";



// import LoginPage2 from "../../pages/login/LoginPage2.tsx";

// const Header = () => {

//   return (
//     <>
//       <h1 style={{ textAlign: "center", backgroundColor: "lavender" }}>
//         Sasha's Page
//       </h1>

//       <div className={s.container}>
//         <Link to={RedirectRoutes.MAIN_PAGE}>
//           <span>Main Page</span>
//         </Link>

//         <Link to={RedirectRoutes.LOGIN}>
//           <span>Login</span>
//         </Link>

//         <Link to={RedirectRoutes.SIGN_UP}>
//           <span>Sign Up</span>
//         </Link>
//       </div>
//       <Routes>
//       <Route path={RedirectRoutes.MAIN_PAGE} element={<MainPage />} /> 
//       <Route path={RedirectRoutes.LOGIN} element={<LoginPage page={EnterTypes.SIGN_IN} />} /> 
//       <Route path={RedirectRoutes.SIGN_UP} element={<SignUpPage page={EnterTypes.SIGN_UP} />} /> 
//       <Route path={RedirectRoutes.CV} element={<CV/>} /> 
//       <Route path={RedirectRoutes.ADMIN} element={<AdminCV/>} /> 




//       </Routes>

//       {/* <LoginPage2/> */}
//     </>
//   );
// };

// export default Header;
