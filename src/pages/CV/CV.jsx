import React from "react";
import s from "./CV.module.css";
import img from "../../common/assets/images/img.JPG";
import { Icon } from '@rsuite/icons';
import * as faPhone from '@fortawesome/free-solid-svg-icons/faPhone';
import * as faEnvelope from '@fortawesome/free-solid-svg-icons/faEnvelope';
import * as faGithub from '@fortawesome/free-brands-svg-icons/faGithub';



const FaSvgIcon = ({ faIcon, ...rest }) => {
  const { width, height, svgPathData } = faIcon;
  return (
    <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
      <path d={svgPathData}></path>
    </svg>
  );
};


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
            <h5>Ivan Franko National University of Lviv</h5>
            <p>Faculty of International Relations</p>
            <p>2015-2021</p>
            <p>Master in International Law and Translation</p>
            </div>
            <div>
            <h5>Logos IT Academy</h5>
            <p>Frontend Development</p>
            <p>2021-2022</p>
            </div>
            </div>
          </div>
          <div className={s.techSkillsContainer}>
            <h4>Technical stack</h4>
            <ul>
              <li>React</li>
              <li>ECMAscript6</li>
              <li>NodeJS</li>
              <li>GIT version control</li>
              <li>HTML/CSS</li>
              <li>Agile/Scrum Metodology</li>
            </ul>
          </div>
          <div className={s.softSkillsContainer}>
            <h4>Soft skills</h4>
            <ul>
              <li>Teamwork and communication</li>
              <li>Client-aimed code writer</li>
              <li>Fast learner</li>
              <li>Problem solving and creativity</li>
              <li>Time management</li>
              <li>Creativity and willingness to learn</li>
            </ul>
          </div>
          <div className={s.langContainer}>
            <h4>Languages</h4>
            <p>English: C1 (Advanced) </p>
            <p>CAE certificate with the overall score 193</p>

            <p>Italian: A2 (Pre-intermediate) </p>
            <p>Erasmus+ exchange student at University of Foggia, Italy</p>

          </div>
          <div className={s.hobbiesContainer}>
            <h4>Hobbies</h4>
            <ul>
              <li>Reading</li>
              <li>Cooking</li>
              <li>Psychology</li>
              <li>Biology</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
