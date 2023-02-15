import "./App.css";
import { useEffect, React } from "react";
import "rsuite/dist/rsuite.min.css";
import Header from "./components/header/Header.tsx";
import {PrivateRoute} from "./common/hoc/PrivateRoute";
import AdminCV from "./pages/CV/adminCv/AdminCV";
import { AppRoutes } from "./common/routes/AppRoutes";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage.jsx";

import CV from "./pages/CV/CV";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage.tsx";

const App = () => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin?.user?.uid);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "user",
  //     JSON.stringify({ user: "Sasha", role: "admin" })
  //   );
  // }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path={AppRoutes.MAIN_PAGE} element={<MainPage />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={AppRoutes.ADMIN} element={<AdminCV />} />
        <Route path={AppRoutes.CV} element={<CV />} />

        {/* <Route path={AppRoutes.ADMIN} element={
          <PrivateRoute Component={AdminCV} />
        }/>  */}

        {/* {user.role === "admin" ? (
          <Route path={AppRoutes.ADMIN} element={<AdminCV />} />
        ) : (
          <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        )} */}
{/*         
          <Route element={<PrivateRoute isAllowed={user?.role === "admin"} />}>
            <Route path={AppRoutes.ADMIN} element={<AdminCV />} />
          </Route>
          <Route path={"*"} element={<NotFoundPage />} /> */}
        
      </Routes>
    </div>
  );
};

export default App;
