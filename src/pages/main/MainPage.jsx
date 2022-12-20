import React from "react";
import Forms from "../forms/Forms.tsx";
import s from "./MainPage.module.css";
// import img from "../../common/assets/images/mainBg.JPG";
import Button from 'rsuite/Button';
import { Route, Routes, useNavigate } from "react-router-dom";
import { RedirectRoutes } from "../../common/routes/AppRoutes";
import CV from "../CV/CV";

const MainPage = () => {
const navigate = useNavigate();
const handleClick = ()=>navigate(RedirectRoutes.CV);

  return (
    <>
      <div className={s.bgImg}>
        <h2>Welcome!</h2>
        <p>To see Sasha's CV press the button below.</p>
        <div>
        <Button 
        // size="lg"
        className={s.btn}
        onClick={handleClick}
        >Go to CV
        </Button>
        </div>
       

        <Forms />
      </div>
      <Routes>
        <Route path={RedirectRoutes.CV} element={<CV/>}/>
      </Routes>
    </>
  );
};

export default MainPage;
