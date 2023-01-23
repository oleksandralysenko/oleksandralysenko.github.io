import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@rsuite/icons';
import * as faPhone from '@fortawesome/free-solid-svg-icons/faPhone';
import * as faEnvelope from '@fortawesome/free-solid-svg-icons/faEnvelope';
import * as faGithub from '@fortawesome/free-brands-svg-icons/faGithub';
import s from "../adminCv/AdminCV.module.css";

import { IconButton, ButtonToolbar } from "rsuite";
import EditIcon from "@rsuite/icons/Edit";


const FaSvgIcon = ({ faIcon, ...rest }) => {
  const { width, height, svgPathData } = faIcon;
  return (
    <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
      <path d={svgPathData}></path>
    </svg>
  );
};


const ContactsComp = () => {
  return (
    <>
      <div className={s.contactContainer}>
      <div className={s.btn}>
        <h4>Contact me</h4>
        <IconButton icon={<EditIcon />} />
      </div>
            <div>
              <span><Icon as={FaSvgIcon} faIcon={faPhone} style={{color: "white"}}/></span>
              <span
              style={{ fontSize: "large",
                color: "#575757"}}
              >     +3809000945</span>
            </div>

            <div>
              <span><Icon as={FaSvgIcon} faIcon={faEnvelope} style={{color: "white"}}/></span>
              <a href="mailto:olysenko25@gmail.com">      olysenko25@gmail.com</a>
            </div>

            <div>
              <span> <Icon as={FaSvgIcon} faIcon={faGithub} style={{color: "white"}}/></span>
              <a href="https://github.com/oleksandralysenko" target="_blank" rel="noreferrer">      oleksandralysenko</a>
              {/* <span> oleksandralysenko</span> */}
            </div>
          </div>
    </>
  );
};

export default ContactsComp;
