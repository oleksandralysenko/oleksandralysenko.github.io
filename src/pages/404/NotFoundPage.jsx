import s from "./NotFoundPage.module.css";

import Button from "rsuite/Button";
import { AppRoutes } from "../../common/routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(AppRoutes.MAIN_PAGE);
  return (
    <>
      <div className={s.bgImg}>
        <h2>Page not found</h2>
        <p>The page you are looking for is temporary unavailable.</p>
        <div>
          <Button
            // size="lg"
            className={s.btn}
            onClick={handleClick}
          >
            Go to the main page
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
