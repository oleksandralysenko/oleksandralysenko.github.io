import AboutComp from "../components/About.tsx"
import ContactsComp from "../components/Contacts.tsx"
import EducationComp from "../components/Education.tsx"
import HobbiesComp from "../components/Hobbies.tsx"
import LanguagesComp from "../components/Languages.tsx"
import PersonalComp from "../components/PersonalInfo.tsx"
import SoftSkillsComp from "../components/SoftSkills.tsx"
import TechSkillsComp from "../components/TechSkills.tsx"

import s from "../adminCv/AdminCV.module.css"

const AdminCV = () => {
  // const user = useTypedSelector(state=>state.user.user)
  // console.log(user);




  return(
<>
<div className={s.mainContainer}>
  <div className={s.sidebar}>
    <div className={s.photoContainer}>

    </div>
    {/* <h3>{user.firstName} {user.lastName}</h3> */}
  </div>
  <PersonalComp/>
  <AboutComp/>
  <ContactsComp/>
  <EducationComp/>
  <TechSkillsComp/>
  <SoftSkillsComp/>
  <LanguagesComp/>
  <HobbiesComp/>


</div>
</>
  )
}

export default AdminCV