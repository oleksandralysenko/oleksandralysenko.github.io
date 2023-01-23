import React from "react";
import s from "../adminCv/AdminCV.module.css"
import { IconButton } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';

const TechSkillsComp = () => {

    return(
        <div className={s.techSkillsContainer}>
          <div className={s.btn}>
          <h4>Technical stack</h4>
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

export default TechSkillsComp;