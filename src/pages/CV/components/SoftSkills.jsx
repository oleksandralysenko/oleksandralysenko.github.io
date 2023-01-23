import React from "react";
import s from "../adminCv/AdminCV.module.css"
import { IconButton } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';

const SoftSkillsComp = () => {

    return(
        <div className={s.softSkillsContainer}>
        <div className={s.btn}>
          <h4>Soft Skills</h4>
          <IconButton icon={<EditIcon />} />
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
}

export default SoftSkillsComp;