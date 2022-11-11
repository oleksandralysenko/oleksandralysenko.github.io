import React from "react";
import s from "./CV.module.css";
import img from "../../common/assets/images/img.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const CV = () => {
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.sideBar}>
          <div className={s.photoContainer}>
            <img src={img} alt="profile picture" />
          </div>

          <div>
            <h4>About me</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ab
              aspernatur cumque, non, obcaecati modi maxime impedit consectetur
              veniam ex odit libero quas vitae id doloribus voluptas optio
              dolores ullam!
            </p>
          </div>

          <div className={s.contactContainer}>
            <h4>Contact me</h4>
            <div>
              <span>Phone</span>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <span>+3809000945</span>
            </div>

            <div>
              <span>Email</span>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <span> olysenko25@gmail.com</span>
            </div>

            <div>
              <span> GitHub</span>
              <FontAwesomeIcon icon="fa-solid fa-code-branch" />
              <span> oleksandralysenko</span>
            </div>
          </div>
        </div>

        <div className={s.infoContainer}>
          <div className={s.headerContainer}>
            <h1>Oleksandra Lysenko</h1>
            <h3>Frontend Developer</h3>
          </div>
          <div className={s.infoBlocks}>
        <div className={s.eduContainer}>
            <h4>Education</h4>
            <div>
            <h6>Ivan Franko National University of Lviv</h6>
            <p>Faculty of International Relations</p>
            <p>2015-2021</p>
            <p>Master in International Law and Translation</p>
            </div>
            <div>
            <h6>Logos IT Academy</h6>
            <p>Faculty of International Relations</p>
            <p>2021-2022</p>
            <p>Frontend Development</p>
            </div>
            </div>
          </div>
          <div className={s.techSkillsContainer}>
            <h4>Tech skills</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={s.softSkillsContainer}>
            <h4>Soft skills</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={s.langContainer}>
            <h4>Languages</h4>
            <p>English: C1 (Advanced) </p>
            <p>CAE certificate with the overall score 193</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
