import * as faFaceFrown from "@fortawesome/free-regular-svg-icons/faFaceFrown";
import * as faHeartCrack from "@fortawesome/free-regular-svg-icons/faHeart";
import * as faFaceSadTear from "@fortawesome/free-regular-svg-icons/faFaceSadTear";

import { Icon } from "@rsuite/icons";
import s from "./NotFoundPage.module.css";

import Button from "rsuite/Button";
import { RedirectRoutes } from "../../common/routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import React from "react";

const FaSvgIcon = ({ faIcon, ...rest }) => {
  const { width, height, svgPathData } = faIcon;
  return (
    <svg
      {...rest}
      viewBox={`0 0 ${width} ${height}`}
      width="2em"
      height="2em"
      fill="currentColor"
    >
      <path d={svgPathData}></path>
    </svg>
  );
};

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(RedirectRoutes.MAIN_PAGE);
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

      <div className={s.iconContainer}>
        <Icon as={FaSvgIcon} faIcon={faFaceFrown} />
        <Icon as={FaSvgIcon} faIcon={faHeartCrack} />
        <Icon as={FaSvgIcon} faIcon={faFaceSadTear} />
      </div>
    </>
  );
};

export default NotFoundPage;
