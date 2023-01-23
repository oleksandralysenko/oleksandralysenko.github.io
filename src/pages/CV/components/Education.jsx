import React from "react";
import s from "../adminCv/AdminCV.module.css";
import { IconButton } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';
const EducationComp = () => {
  return (
    <>
      <div className={s.eduContainer}>
        <div className={s.btn}>
          <h4>Education</h4>
          <IconButton icon={<EditIcon />} />
        </div>

        <div className={s.eduItem}>
          <h5>Ivan Franko National University of Lviv</h5>
          <p>Faculty of International Relations</p>
          <p>2015-2021</p>
          <p>Master in International Law and Translation</p>
        </div>
        <div className={s.eduItem}>
          <h5>Logos IT Academy</h5>
          <p>Frontend Development</p>
          <p>2021-2022</p>
        </div>
      </div>
    </>
  );
};

export default EducationComp;
