import AboutComp from "../components/About.jsx";
import ContactsComp from "../components/Contacts.jsx";
import EducationComp from "../components/Education.jsx";
import HobbiesComp from "../components/Hobbies.jsx";
import LanguagesComp from "../components/Languages.jsx";
import PersonalComp from "../components/PersonalInfo.tsx";
import SoftSkillsComp from "../components/SoftSkills.jsx";
import TechSkillsComp from "../components/TechSkills.jsx";

import s from "../adminCv/AdminCV.module.css";
// import Forms from "../../forms/Forms.tsx"

const AdminCV = () => {
  // const user = useTypedSelector(state=>state.user.user)
  // console.log(user);

  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.sidebar}>
          <AboutComp />
          <ContactsComp />
        </div>

        <div className={s.infoContainer}>
          <PersonalComp />
          <EducationComp />
          <TechSkillsComp />
          <SoftSkillsComp />
          <LanguagesComp />
          <HobbiesComp />
        </div>
      </div>
    </>
  );
};

export default AdminCV;
