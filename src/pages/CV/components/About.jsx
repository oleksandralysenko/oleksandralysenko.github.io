import React from "react";
import s from "../adminCv/AdminCV.module.css";
import { IconButton, ButtonToolbar } from "rsuite";
import EditIcon from "@rsuite/icons/Edit";

const AboutComp = () => {
  return (
    <div>
      <div className={s.photoContainer}>
        <div>
        {/* <IconButton icon={<EditIcon />} /> */}
        </div>
      </div>
      <div className={s.btn}>
        <h4>About me</h4>
        <IconButton icon={<EditIcon />} />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ab
        aspernatur cumque, non, obcaecati modi maxime impedit consectetur veniam
        ex odit libero quas vitae id doloribus voluptas optio dolores ullam!
      </p>
    </div>
  );
};

export default AboutComp;
